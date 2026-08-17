// Import modules needed for app
const express = require("express");
const cors = require('cors');
const path = require('path');

// Create referent to Express.js application
const app = express();

// Create constant for listening port
const PORT = process.env.PORT || 8000;

// Create constants to store the locations of the various assets and HTML files
const mainPage = "index.html";
const folderPublic = "public";
const folderTemplates = "templates";
const folderStatic = "static";

// Middleware calls
app.use(cors());
app.use(express.static(path.join(__dirname, folderPublic, folderStatic)));

app.get('/', (req, res) => {
    let fileName = path.join(__dirname, folderPublic, folderTemplates, mainPage);
    res.sendFile(fileName);
});

app.listen(PORT, () => {
    console.log("The server has started");
    console.log("View the site at http://localhost:8000");
});