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

// add path parameters to the path
app.get("/contact/:id/test/:user_name", function (req, res) {
    console.log(req.params);
    let my_path_variable = req.params.id;
    let path_user_name = req.params.user_name;
    res.send("Hello from the contact page " + my_path_variable + ", and user name is - " + path_user_name);
});

// use method to handle the paths not present on our Server. Has to be put at the end of all the paths
app.use(function (req, res) {
    res.send("The path you are trying took for does not exist on our server");
});

// start the server
app.listen(8000, function () {
    console.log("The server has started");
});

