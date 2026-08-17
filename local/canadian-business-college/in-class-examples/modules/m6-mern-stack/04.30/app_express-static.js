// import file system module fs
let fs = require("fs");
// import the express js module
let express = require("express");
// import cors package
let cors = require("cors");
//include path module
let path = require("path");


let app = express();


// add cors as middleware
app.use(cors());
// add json conversion as middleware
app.use(express.json());
// add url encoding on the request data coming in
app.use(express.urlencoded({ extended: true }));
//middleware to serve static files
app.use(express.static(path.join(__dirname, "public", "static")))

// accept get request on root url
app.get("/", function (req, res) {
    // read from the file
    res.sendFile(path.join(__dirname, "public", "templates", "home.html"));
});

app.get("/contact", function (req, res) {
    // read from the file
    res.sendFile(path.join(__dirname, "public", "templates", "contact.html"));
});

app.get("/page_not_found", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "templates", "not_found.html"));
});

// use method to handle the paths not present on our Server. Has to be put at the end of all the paths
app.use(function (req, res) {
    res.redirect("/page_not_found");
});

// start the server
app.listen(8000, function () {
    console.log("The server has started");
    console.log("View the site at http://localhost:8000");
});
