/** Imports */
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

/** Global variables */
const app = express();
const templateDir = path.join(__dirname, "public", "templates");
const staticDir = path.join(__dirname, "public", "static");
const htmlFiles = {
    "index": "index.html",
    "form": "form.html",
    "contact": "contact.html"
}

/** Middleware Setup */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticDir));