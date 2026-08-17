// import file system module fs
let fs = require("fs");
// import the express js module
let express = require("express");
// import cors package
let cors = require("cors");

let app = express();

// add cors as middleware
app.use(cors());
// add json conversion as middleware
app.use(express.json());

// accept get request on root url
app.get("/", function (req, res) {
    res.send("Hello from the node js express home page");
});

// accept only post request
app.post("/the-data", function (req, res) {
    res.send("thank you for the data");
});

// accepts all type of requests
app.all("/generic", function (req, res) {
    if (req.method == "GET") {
        res.send("Thank you for sending GET request to the generic path of our server");
    }
    else if (req.method == "POST") {
        res.send("Thank you for sending POST request to the generic path of our server");
    }
    else {
        res.send("Thank you for sending " + req.method + " request to the generic path of our server");
    }
});

// start the server
app.listen(8000, function () {
    console.log("The server has started");
});

