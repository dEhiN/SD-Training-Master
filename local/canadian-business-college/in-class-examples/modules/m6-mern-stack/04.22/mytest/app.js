// Import modules needed for app
const express = require("express");
const path = require('path');
const fs = require('fs');

// Create referent to Express.js application
const app = express();

// Create constant for listening port
const PORT = process.env.PORT || 8000;

// Create constants to store the location of the Module 5 project and the name "index.html"
const modFiveFolderName = "m5project";
const modFiveStartPage = "index.html";

// Simple variable to store page HTML
let mainPage = `
<html>
    <head>
        <title>Express Test</title>
    </head>
    <body>
        <h1>This is a test of Express</h1>
        <p>I'm using a string variable that contains HTML content and showing that.</p>
    </body>
</html>
`

app.get('/', (req, res) => {
    res.send(mainPage);
});

app.get('/test', (req, res) => {
    let fullPath = path.join(modFiveFolderName, modFiveStartPage);
    // Method 1
    fs.readFile(fullPath, 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        }
        else {
            console.log(err);
        }
    });
    // Method 2
    let fileContents = fs.readFileSync(fullPath, "utf-8");
    res.send(fileContents);
})

app.listen(PORT, () => {
    console.log("The server has started. Listen on http://localhost:8000");
});