/** Imports */
const path = require("path");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mailer = require("nodemailer");

/** Global variables */
const app = express();
const templateDir = path.join(__dirname, "public", "templates");
const staticDir = path.join(__dirname, "public", "static");
const htmlFiles = {
    "index": "index.html",
    "form": "form.html",
    "contact": "contact.html"
}
let returnFile = ""
const PORT = 4006;

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
app.post("/assignment-form", (req, res) => {
    res.send("This hasn't been implemented yet!");
})

/** Contact page */
app.get("/contact-page", (req, res) => {
    returnFile = path.join(templateDir, htmlFiles.contact);
    res.sendFile(returnFile);
})
app.post("/contact-page", (req, res) => {
    res.send("This hasn't been implemented yet!");
})

/** Server entry point */
app.listen(PORT, () => {
    console.log(`The server has started. It is running on http://localhost:${PORT}`);
});