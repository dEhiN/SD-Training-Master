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

// accept get request on root url
app.get("/", function (req, res) {
    // folder directory and file location using __dirname and __filename
    res.send("Hello from the home page, the directory path is - " + __dirname + ", the file location is - " + __filename);
});

// use method to handle the paths not present on our Server. Has to be put at the end of all the paths
app.use(function (req, res) {
    res.send("The path you are trying took for does not exist on our server");
});

// start the server
app.listen(8000, function () {
    console.log("The server has started");
});

