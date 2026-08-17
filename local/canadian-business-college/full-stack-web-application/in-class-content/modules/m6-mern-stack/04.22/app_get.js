// import file system module fs
let fs = require("fs");
// import the express js module
let express = require("express");

let app = express();

// handle home page on empty path /
app.get("/", function (req, res) {
    res.send("Hello from the node js express method");
});

// handle contact path
app.get("/contact", function (req, res) {
    res.send("Hello from the contact page");
});

// handle about path
app.get("/about", function (req, res) {
    res.send("Hello from the about us page");
});

// start the server
app.listen(8000, function () {
    console.log("The server has started");
});