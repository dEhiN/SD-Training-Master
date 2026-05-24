/** Built-in Module Imports */
import fs from 'fs';
import path from 'path';
import process from 'process';
import url from 'url';
/** Named Module Imports */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import validator from 'validator';
import Ajv from 'ajv';
/** Installed Module Imports */
import * as mailer from 'nodemailer';


/** Configure the dotenv module to add the variables in the .env file to the environment path. This is done at this point so the script specific global variables that rely on the environment variables can be initialized. The results are stored in a variable for easier use. */
let dotConfigResults = dotenv.config().parsed;


/** Script specific global variables */
// Set the server port
const PORT = dotConfigResults.PORT || 3000;
// Set the mode of the server
const _rawNodeEnv = (dotConfigResults && dotConfigResults.NODE_ENV) || process.env.NODE_ENV;
const SERVER_MODE = {
    CURR_MODE: _rawNodeEnv ? _rawNodeEnv.toString().toLowerCase() : "development",
    DEV_MODE: "development",
    PROD_MODE: "production",
    TEST_MODE: "test",
    STAGE_MODE: "staging"
}
// derive production flag: either explicit SERVER_LIVE=true in .env or NODE_ENV=production
const isProduction = (dotConfigResults?.SERVER_LIVE?.toString?.().toLowerCase?.() === 'true') || (process.env.SERVER_LIVE?.toString?.().toLowerCase?.() === 'true') || (SERVER_MODE.CURR_MODE === SERVER_MODE.PROD_MODE);
// Variables for email rate limiting
const rateLimitMap = new Map(); // ip -> { count, firstTs }
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 10; // max submissions per IP per window
// Variables to assist with console and return messages
const msgObjConsole = {
    NOSMTP: "No SMTP credentials found — creating Ethereal test account for local development",
    ETHACCT: "Ethereal account created: ",
    MAILDISABLED: "No SMTP configuration and running in production — mailer disabled",
    CONNSUCCESS: "Connection verification to email server was successful!",
    CONNFAILURE: "Couldn't verify connection to email server. The following error occurred:\n",
    MAILERNOAUTH: "Mailer is not authenticated; cannot send contact email.",
    PREVIEWMSG: "Preview URL: ",
    POSTERR: "Contact POST error:\n",
    JSONREADERR: "Error reading JSON file:\n",
    JSONVALIDATION: "JSON validation failed:\n",
}
const msgObjStatusReturn = {
    LIMIT_EXCEED: "Rate limit exceeded. Try again later.",
    FIELDS_MISSING: "Missing required fields: name, email, message",
    EMAIL_INVALID: "Invalid email address",
    MSG_LENGTH_SHORT: "Message is too short (min 20 chars)",
    SRVC_UNAVAILABLE: "Email service unavailable",
    MSG_SUCCESS: "Message sent",
    SRVR_ERROR: "Internal server error",
    JSON_INVALID: "JSON data validation failed",
}
// Variables for storing path and directory names
const BANDCAMP_JSON_FILE = "track_data.json";
const BANDCAMP_JSON_SCHEMA = "track_data.schema.json";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));;
let staticDir;
// Variables for the email service
const testMailSetting = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false
}
let mailerUserFrom = dotConfigResults.EMAIL_FROM_USER || "";
let mailerUserTo = dotConfigResults.EMAIL_TO_USER || "";
let mailerPasswordFrom = dotConfigResults.EMAIL_FROM_PASSWORD || "";
let mailerServiceName = dotConfigResults.EMAIL_SERVICE_NAME || "";
let mailerConnectAuth;


/** Module specific global variables: 
 * - Create the Express app 
 * - Create an Ajv object to use for the JSON schema validation
 * - Create a transporter instance for nodemailer  */
const app = express();
const ajv = new Ajv({ allErrors: true });
let mailTransporter;


/** Variable and setup initialization */

/** Set the static directory if the server is running in production mode. If it's not, the Vite dev server handles the frontend. */
if (isProduction) {
    // production serves built frontend located at <repo root>/dist/frontend
    const repoRoot = path.resolve(__dirname, '..');
    staticDir = path.join(repoRoot, 'dist', 'frontend');
}

/**
 * This function sets up the mailer service for the nodemailer module. The mail transporter from the module is initialized using the following:
 * 
 * If SMTP credentials have been provided, the mail transporter uses them.
 * If there are no credentials and the server is not in production mode, an Ethereal account is created for testing purposes. This allows for verification that emails are being sent.
 * 
 * Finally, the module verify function is called on the mail transporter to determine whether a connection to the email server is possible. The results are stored in the global variable mailerConnectAuth.
 * 
 */
async function setupMailer() {
    try {
        if (mailerUserFrom && mailerPasswordFrom && mailerServiceName) {
            mailTransporter = mailer.createTransport({
                service: mailerServiceName,
                auth: { user: mailerUserFrom, pass: mailerPasswordFrom }
            });
        }
        else if (SERVER_MODE.CURR_MODE !== SERVER_MODE.PROD_MODE) {
            console.log(msgObjConsole.NOSMTP);

            const testAcct = await mailer.createTestAccount();

            // default sender/recipient to test account when not explicitly set
            mailerUserFrom = mailerUserFrom || testAcct.user;
            mailerUserTo = mailerUserTo || testAcct.user;

            mailTransporter = mailer.createTransport({
                host: testMailSetting.host,
                port: testMailSetting.port,
                secure: testMailSetting.secure,
                auth: { user: testAcct.user, pass: testAcct.pass }
            });

            console.log(msgObjConsole.ETHACCT + testAcct.user);
        }
        else {
            console.warn(msgObjConsole.MAILDISABLED);

            mailerConnectAuth = false;
            return;
        }

        await mailTransporter.verify();
        mailerConnectAuth = true;

        console.log(msgObjConsole.CONNSUCCESS);
    }
    catch (err) {
        mailerConnectAuth = false;

        console.log(msgObjConsole.CONNFAILURE + err);
    }
}


/** Middleware setup: 
 * - Set up CORS
 * - Add the ability to handle complex form data through POST
 * - Add the ability to handle JSON data through POST
 * - If in production mode, specify the static directory that Express should use
 * - Test the email connection
 */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (isProduction) {
    // console.log(`staticDir: ${staticDir}`);
    app.use(express.static(staticDir));
}
// Initialize mailer setup (real SMTP or Ethereal fallback in dev)
// Skip mailer initialization when running under test to avoid network calls
if (SERVER_MODE.CURR_MODE !== SERVER_MODE.TEST_MODE) {
    setupMailer();
}


/** Helper functions */

/**
 * This function checks to see if the rate limit has been reached for a specific ip. The rate limit pertains to how many messages from the contact form that ip can send in a given time frame. The rate for now is set to 10 times per hour.
 * 
 * Each ip is added to a Map variable (rateLimitMap). The ip becomes the key, and the value is an object containing a count and a date stamp using Date.now(). The count specifies how many times the ip has sent a message. The date stamp is populated the first time an ip is added to the Map.
 * 
 * The current date stamp is gotten and the ip is retrieved from the Map. If it doesn't exist, then it's added with a count of 1 and the date stamp. If it exists, then two checks are performed:
 * 
 * The first is to see if the difference between the current date stamp and the first one recorded in the Map is over an hour. If so, then the value object for that ip is reset - the count goes back to 1, and the recorded first date stamp becomes the current one.
 * 
 * The second is to see if the count for the ip is over 10. Since the first check has already processed, this second check means the ip is over the rate limit.
 * 
 * Finally, the count is increased by one.
 * 
 * @param {string} ip The ip address of the incoming request (see the Contact form endpoint route)
 * @returns Boolean value representing if the rate limit has been reached. True means it has; false means it hasn't.
 */
function isRateLimited(ip) {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry) {
        rateLimitMap.set(ip, { count: 1, firstTs: now });
        return false;
    }

    if (now - entry.firstTs > RATE_LIMIT_WINDOW) {
        // reset window
        rateLimitMap.set(ip, { count: 1, firstTs: now });
        return false;
    }

    if (entry.count >= RATE_LIMIT_MAX) return true;

    entry.count += 1;
    return false;
}

/**
 * This function will create the fully formed HTML code to return to the GET /api/bandcamp call.
 * 
 * It does this by parsing the JSON data object passed in and using the data to create the embed iframe and anchor code that Bandcamp uses. The specific code needed for each track listed in the JSON data is generated and added together.
 * 
 * Each track code is wrapped in list elements for easier inclusion client-side. This means, for each track, the HTML code consists of: <li><iframe><a></a></iframe></li>
 * 
 * The generated HTML code is stored as a string and returned.
 * 
 * @param {object} jsonData An object representing the JSON data found in the file track_data.json
 * @returns string A string representing the fully formed HTML code to return to the API
 */
function createBandcampLinks(jsonData) {
    const tracksArray = jsonData.Tracks;
    const bandcampURL = jsonData.BandcampURL;

    let completeHTML = "";

    // simple HTML escaper to avoid injecting raw values into attributes/text
    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    for (let track of tracksArray) {
        const bandcampInfo = track.BandcampEmbedInfo;
        const embedInfo = bandcampInfo.EmbedStyle;

        const safeTrackId = Number(bandcampInfo.TrackId) || 0;
        const safeIFrameSize = escapeHtml(embedInfo.IFrameSize);
        const safeBg = escapeHtml(embedInfo.BackgroundColor);
        const safeLink = escapeHtml(embedInfo.LinkColor);
        const safeTrackList = embedInfo.TrackListShow ? 'true' : 'false';
        const safeTransparent = embedInfo.TransparentShow ? 'true' : 'false';
        const safeWidth = Number(embedInfo.IFrameWidth.Amount) || 0;
        const safeWidthUnit = escapeHtml(embedInfo.IFrameWidth.Units || 'px');
        const safeHeight = Number(embedInfo.IFrameHeight.Amount) || 0;
        const safeHeightUnit = escapeHtml(embedInfo.IFrameHeight.Units || 'px');

        const safeAnchorText = escapeHtml(bandcampInfo.AnchorText);
        const safeAnchorName = encodeURIComponent(String(bandcampInfo.AnchorTrackName || '').trim());
        const safeBandcampURL = escapeHtml(bandcampURL.replace(/\/$/, ''));

        let trackHTML = `<li class="playlist__item"><iframe class="playlist__iframe" style="border:0;width:${safeWidth}${safeWidthUnit};height:${safeHeight}${safeHeightUnit};" src="https://bandcamp.com/EmbeddedPlayer/track=${safeTrackId}/size=${safeIFrameSize}/bgcol=${safeBg}/linkcol=${safeLink}/tracklist=${safeTrackList}/transparent=${safeTransparent}/" seamless><a href="${safeBandcampURL}/track/${safeAnchorName}">${safeAnchorText}</a></iframe></li>`;

        completeHTML += trackHTML;
    }
    return completeHTML;
}


/** Route logic */

// Bandcamp tracks endpoint
app.get('/api/bandcamp', async (req, res) => {
    const jsonFilePath = path.join(__dirname, BANDCAMP_JSON_FILE);
    const jsonSchemaPath = path.join(__dirname, BANDCAMP_JSON_SCHEMA);

    try {
        const [rawFileData, rawSchemaData] = await Promise.all([
            fs.promises.readFile(jsonFilePath, 'utf-8'),
            fs.promises.readFile(jsonSchemaPath, 'utf-8')
        ]);

        const jsonBandcampData = JSON.parse(rawFileData);
        const jsonBandcampSchema = JSON.parse(rawSchemaData);

        const schemaValidator = ajv.compile(jsonBandcampSchema);
        const isValidData = schemaValidator(jsonBandcampData);

        if (!isValidData) {
            console.warn(msgObjConsole.JSONVALIDATION, JSON.stringify(schemaValidator.errors, null, 4));

            return res.status(400).json({
                ok: false,
                error: msgObjStatusReturn.JSON_INVALID
            });
        }
        else {
            const fullHTML = createBandcampLinks(jsonBandcampData);
            return res.json({ html: fullHTML });
        }
    }
    catch (err) {
        console.error(msgObjConsole.JSONREADERR + err);

        return res.status(500).json({
            ok: false,
            error: msgObjStatusReturn.SRVR_ERROR
        });
    }
});

// Contact form endpoint
app.post('/api/contacts', async (req, res) => {
    try {
        const ip = req.ip || req.connection?.remoteAddress || 'unknown';

        if (isRateLimited(ip)) {
            return res.status(429).json({
                ok: false,
                error: msgObjStatusReturn.LIMIT_EXCEED
            });
        }

        const { name, email, message } = req.body || {};
        if (!name || !email || !message) {
            return res.status(400).json({
                ok: false,
                error: msgObjStatusReturn.FIELDS_MISSING
            });
        }

        // Validate the email using the validator package
        const sanitizedEmail = validator.normalizeEmail(email);
        if (!validator.isEmail(sanitizedEmail)) {
            return res.status(400).json({
                ok: false,
                error: msgObjStatusReturn.EMAIL_INVALID
            });
        }

        if (typeof message !== 'string' || message.trim().length < 20) {
            return res.status(400).json({
                ok: false, error:
                    msgObjStatusReturn.MSG_LENGTH_SHORT
            });
        }

        if (!mailerConnectAuth) {
            // If mailer isn't configured, still accept and respond but indicate service unavailable
            console.warn(msgObjConsole.MAILERNOAUTH);

            return res.status(503).json({
                ok: false,
                error: msgObjStatusReturn.SRVC_UNAVAILABLE
            });
        }

        const mailOptions = {
            from: mailerUserFrom || email,
            to: mailerUserTo || mailerUserFrom || email,
            subject: `Website contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`
        };

        const info = await mailTransporter.sendMail(mailOptions);

        // If using a test account (Ethereal), log the preview URL so developer can inspect the message
        try {
            const preview = mailer.getTestMessageUrl ? mailer.getTestMessageUrl(info) : null;

            if (preview) console.log(msgObjConsole.PREVIEWMSG + preview);
        }
        catch (e) { }

        return res.status(200).json({
            ok: true,
            message: msgObjStatusReturn.MSG_SUCCESS
        });
    }
    catch (err) {
        console.error(msgObjConsole.POSTERR, err);

        return res.status(500).json({
            ok: false,
            error: msgObjStatusReturn.SRVR_ERROR
        });
    }
});

// SPA fallback using a middleware to avoid path-to-regexp issues
app.use((req, res, next) => {
    // In production mode serve the SPA index.html for all non-API GET requests
    if (isProduction) {
        if (req.method !== 'GET') return next();

        if (req.path.startsWith('/api')) return next();

        if (path.extname(req.path)) return next();

        const indexFile = path.join(staticDir, 'index.html');

        return res.sendFile(indexFile, (err) => {
            if (err) return next();
        });
    }
    // Not production: continue to next middleware/route
    return next();
});


/** Server entry point — only start listening when not under test */
if (SERVER_MODE.CURR_MODE !== SERVER_MODE.TEST_MODE) {
    app.listen(PORT, () => {
        console.log(`The server has started. It is running on http://localhost:${PORT}`);
    });
}

export default app;
