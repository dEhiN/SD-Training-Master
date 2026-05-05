/** Imports */
const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mailer = require("nodemailer");

/** Script specific global variables */
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
const PORT = 4006;

/** Module reference global variables */
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

/** Create 'uploads' folder prior to continuing. If there's an error because the folder already exists, return and continue. */
fs.mkdir(uploadDir, (err) => {
    if (err) return;
});

/** Middleware setup */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticDir));

/** Route logic */
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
app.post("/assignment-form", processMulter.single("u_image"), (req, res) => {
    const userData = req.body;
    outputFormDataToDisk(userData);
    res.redirect("/assignment-form");
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