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

app.post("/the-data", function (req, res) {
    let req_data = req.body;
    console.log(req_data);
    res.send("thank you for the data");
});

// start the server
app.listen(8000, function () {
    console.log("The server has started");
});