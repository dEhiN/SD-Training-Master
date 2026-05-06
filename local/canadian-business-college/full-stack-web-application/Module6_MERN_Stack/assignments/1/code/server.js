/** Built-in Module Imports */
const fs = require("fs");
const path = require("path");

/** Installed Module Imports */
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mailer = require("nodemailer");


/** Script specific global variables */
const PORT = 4006;
const templateDir = path.join(__dirname, "public", "templates");
const staticDir = path.join(__dirname, "public", "static");
const uploadDir = path.join(__dirname, "uploads");
const outputPath = path.join(__dirname, "submissions.txt");
const htmlFiles = {
    "index": "index.html",
    "form": "form.html",
    "contact": "contact.html",
    "not_found": "404.html"
}
let returnFile;
let mailerUser;
let mailerPassword;
let mailConnectAuth;


/** Module configuration needed prior to proceeding */

/** Configure the dotenv module to add the variables in the .env file to the environment path */
dotenv.config();

/** Create the 'uploads' folder prior to continuing. If there's an error because the folder already exists, just continue. */
fs.mkdir(uploadDir, (err) => {
    if (err) return;
});

/** Initialize the variables for the Gmail username and password */
mailerUser = process.env.GMAIL_APP_USER || "";
mailerPassword = process.env.GMAIL_APP_PASSWORD || "";


/** Module reference global variables: 
 * - Creates the Express app
 * - Sets up a Multer StorageEngine with the correct save directory along with the option to use the original file name
 * - Creates a Multer instance with that StorageEngine
 * - Creates a transporter instance for nodemailer using Gmail as the service (uses the built-in values for Gmail)*/
const app = express();
const storageDetails = multer.diskStorage({
    destination: (req, userFile, callbackFunc) => {
        callbackFunc(null, uploadDir);
    },
    filename: (req, userFile, callbackFunc) => {
        callbackFunc(null, userFile.originalname);
    }
});
const processMulter = multer({ storage: storageDetails });
const mailTransporter = mailer.createTransport({
    service: "Gmail",
    auth: {
        user: mailerUser,
        pass: mailerPassword
    }
});


/** Middleware setup: 
 * - Sets up CORS
 * - Add the ability to handle complex form data through POST
 * - Specifies the static directory that Express should use
 * - Tests the Gmail connection - if it passes, sets the global boolean mailConnectAuth to true; if it fails, outputs the error to the console */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticDir));
async function verifyEmailConnection() {
    try {
        await mailTransporter.verify();
        mailConnectAuth = true;
        console.log("Connection verification to Gmail was successful!");
    }
    catch (err) {
        mailConnectAuth = false;
        console.log(`Couldn't verify the connection to Gmail. The following error occurred:\n${err}`);
    }
}
verifyEmailConnection();


/** Route logic: The GET methods use the global variable returnFile to specify the correct HTML to send to the client and then send the file. The POST methods handle the respective form data that is sent back. */

/** Home page */
app.get("/", (req, res) => {
    returnFile = path.join(templateDir, htmlFiles.index);
    res.sendFile(returnFile);
})

/** Assignment form page */
app.get("/assignment-form", (req, res) => {
    returnFile = path.join(templateDir, htmlFiles.form);
    res.sendFile(returnFile);
})
app.post("/assignment-form", processMulter.single("u_image"), async (req, res) => {
    const userData = req.body;

    /** Call the helper function to save the form data to disk. Grab the returned value to determine if the save action was successful or not. */
    let writeSuccess = await outputFormDataToDisk(userData);

    /** If the save action failed, return a status code of 500 to the browser. This is intended to then be handled by the client side JavaScript. */
    if (!writeSuccess) {
        return res.sendStatus(500);
    }

    /** There were no issues, so send back a status of 200. */
    res.sendStatus(200);
})

/** Contact page */
app.get("/contact-page", (req, res) => {
    returnFile = path.join(templateDir, htmlFiles.contact);
    res.sendFile(returnFile);
})
app.post("/contact-page", async (req, res) => {
    let emailSent;
    let returnMessage;
    let returnStatus;

    /** Try to send the email only if the Gmail connection has been verified. If not, set a return message letting the user know what happened. */
    if (mailConnectAuth) {
        const userData = req.body;

        /** Call the helper function to send an email to the web developer. Grab the returned values to determine if the save action was successful or not, and the message returned. */
        const results = await sendEmailFromUser(userData);
        emailSent = results.sendStatus;
        returnMessage = results.message;
    }
    else {
        emailSent = false;
        returnMessage = "Connection to the email server couldn't be established";
    }

    /** Unfortunately, due to issues with trying to properly intercept the contact form data client-side, validate it, send it to the server, and then read the response, the below code is being skipped for a simple redirect. As a result, the user will not know if their email was sent. */
    res.redirect("/");

    /** If the email couldn't be sent, set the return status code to 500. */
    // if (!emailSent) {
    //     returnStatus = 500;
    // }
    // else {
    //     returnStatus = 200;
    // }

    /** Set the return status */
    // res.status(returnStatus);

    /** Send back the return status code and the message from the helper function. This is intended to then be handled by the client side JavaScript.*/
    // res.json({
    //     status: returnStatus,
    //     message: returnMessage
    // });
})

/** Catch-all */
app.use((req, res) => {
    returnFile = path.join(templateDir, htmlFiles.not_found);
    res.status(404).sendFile(returnFile);
})

/** Server entry point */
app.listen(PORT, () => {
    console.log(`The server has started. It is running on http://localhost:${PORT}`);
});

/** Script specific functions */
/** This function takes user submitted form data and writes it to a file on disk. It then returns the result of that action, whether it succeeded or not.
 * A try...catch block is used with the recommended way to handle file I/O calls, which is to use the FileSystem.Promises method along with the async..await keywords. 
 * This approach is preferred over the traditional callback method for robustness and reliability. Although the assignment is simple in scope, it is better for learning purposes to try and follow recommended and modern approaches.
 * 
 * @param {Request.body} userData An object that contains the body of a Request sent through a post method.
 * 
 * @returns {Promise<boolean>} Specifies whether the data was written successfully to disk or not
 */
async function outputFormDataToDisk(userData) {
    let outputString = "";
    let writeSuccess = true;

    const u_name = userData.u_name;
    const u_age = userData.u_age;
    const u_car = userData.u_car;
    const u_job = userData.u_job;

    outputString = `Name: ${u_name}\n`;
    outputString += `\tAge: ${u_age}\n`;
    outputString += `\tCar: ${u_car}\n`;
    outputString += `\tJob: ${u_job}\n\n`;

    try {
        await fs.promises.appendFile(outputPath, outputString);
    }
    catch (err) {
        writeSuccess = false;
    }

    return writeSuccess;
}


/** This function takes user contact information from the contact.html page and emails that to the web developer.
 * 
 * The contact information - name, email, and message - are taken from the parameter passed in. An email message is then created with the contact's email set as the reply-to field.
 * 
 * Finally, a try..catch block is sued to send the email. The returned message 
 * 
 * @param {Request.body} userData An object that contains the body of a Request sent through a post method.
 * 
 * @returns {Promise<object>} An object containing two key-value pairs:  
 *                     send - a boolean specifying whether the email was sent or not  
 *                     message - a message containing either the response from the SMTP server if the send was successful, or the error message if not
 */
async function sendEmailFromUser(userData) {
    let returnMessage;
    let sendSuccess;

    const c_name = userData.c_name;
    const c_email = userData.c_email;
    const c_message = userData.c_message;

    const emailMessage = {
        from: mailerUser,
        to: mailerUser,
        replyTo: c_email,
        subject: `New contact message for Module 5, Assignment 1`,
        text: `Hi there, this is the server for Module 5, Assignment 1.\n\nYou have a new contact message from ${c_name} at ${c_email}. The message is as follows:\n\n----------\n${c_message}\n----------\n\nHave a wonderful day,\n\nYour friendly server email transport service :)`,
    }

    try {
        let emailResponse = await mailTransporter.sendMail(emailMessage);
        returnMessage = emailResponse.response;
        sendSuccess = true;
    }
    catch (err) {
        if (err instanceof Error) {
            returnMessage = err.message;
        }
        else {
            returnMessage = "Unexpected error occurred";
        }
        sendSuccess = false;
    }

    return {
        sendStatus: sendSuccess,
        message: returnMessage,
    };
}