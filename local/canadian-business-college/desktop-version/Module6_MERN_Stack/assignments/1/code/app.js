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
const htmlFiles = {
    "index": "index.html",
    "form": "form.html",
    "contact": "contact.html",
    "not_found": "404.html"
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

/** Create 'uploads' folder */
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
    res.send("This hasn't been implemented yet!");
    console.log(req.file);
    console.log(req.body);
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