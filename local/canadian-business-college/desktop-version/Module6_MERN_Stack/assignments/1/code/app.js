/** Imports */
const fs = require("fs");
const path = require("path");
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
const assignmentFormData = {
    "u_name": "",
    "u_age": "",
    "u_car": "",
    "u_job": ""
}
let returnFile = ""


/** Module reference global variables: Creates the Express app, sets up a Multer StorageEngine with the correct save directory along with the option to use the original file name, and a Multer instance with that StorageEngine. */
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

/** Creates the 'uploads' folder prior to continuing. If there's an error because the folder already exists, the code just continues. */
fs.mkdir(uploadDir, (err) => {
    if (err) return;
});


/** Middleware setup: Sets up CORS, the ability to handle complex form data through POST, and the static directory that Express should use. */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticDir));


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
app.post("/contact-page", (req, res) => {
    res.send("This hasn't been implemented yet!");
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
 * @returns {Boolean} Specifies whether the data was written successfully to disk or not
 */
async function outputFormDataToDisk(userData) {
    let outputString = "";
    let writeSuccess = true;

    assignmentFormData.u_name = userData.u_name;
    assignmentFormData.u_age = userData.u_age;
    assignmentFormData.u_car = userData.u_car;
    assignmentFormData.u_job = userData.u_job;

    outputString = `Name: ${assignmentFormData.u_name}\n`;
    outputString += `\tAge: ${assignmentFormData.u_age}\n`;
    outputString += `\tCar: ${assignmentFormData.u_car}\n`;
    outputString += `\tJob: ${assignmentFormData.u_job}\n\n`;

    try {
        await fs.promises.appendFile(outputPath, outputString);
    }
    catch (err) {
        writeSuccess = false;
    }

    return writeSuccess;
}