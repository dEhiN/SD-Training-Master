// import file system module fs
let fs = require("fs");
// import the express js module
let express = require("express");
// import cors package
let cors = require("cors");
// import multer package to deal with files in post request
let multer = require("multer")

// multer config for file destination and file naming to original name
let storage_config = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

let uploads = multer({ storage: storage_config });

let app = express();

// add cors as middleware
app.use(cors());
// add json conversion as middleware
app.use(express.json());
// add url encoding on the request data coming in
app.use(express.urlencoded({ extended: true }));

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

// read query params from the URL
app.get("/about", function (req, res) {
    console.log(req.query); let query_name = req.query.name;
    let query_age = req.query.age;
    let query_city = req.query.city;
    res.send("User name given - " + query_name + ", user age given - " + query_age + ", user city given - " + query_city);
});


app.post("/data-transfer", uploads.single("u_file"), function (req, res) {
    let my_user_data = req.body;
    res.send("User name is - " + my_user_data.u_name + ", user age is - " + my_user_data.u_age + ", user city is - " + my_user_data.u_city + ", and user hobby is - " + my_user_data.u_hobby);
})

// use method to handle the paths not present on our Server. Has to be put at the end of all the paths
app.use(function (req, res) {
    res.send("The path you are trying took for does not exist on our server");
});

// start the server
app.listen(8000, function () {
    console.log("The server has started");
});