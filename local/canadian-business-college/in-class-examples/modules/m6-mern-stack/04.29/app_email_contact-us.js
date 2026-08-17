// import file system module fs
let fs = require("fs");
// import the express js module
let express = require("express");
// import cors package
let cors = require("cors");
// import multer package to deal with files in post request
let multer = require("multer");
// import nodemailer to be able to send out email
let nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        // gmail email id
        user: "",
        // password without spaces
        pass: ""
    }
});


// multer config for file destination and file naming to origional name
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
    res.send("Hello from the home page")
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

// allows you to add more than one field content to multer to handle the files
let multiple_uploads = uploads.fields([
    { name: "u_file" },
    { name: "u_image" },
    { name: "u_data" }
])

// let multer handle more than one file coming in single input type file
app.post("/contact-us", multiple_uploads, function (req, res) {
    let my_user_data = req.body;
    // creating string of message body to be sent in email later
    let my_email_body = "Users name - " + my_user_data.user_name + "\n Users Email - " + my_user_data.user_email + "\n User message - " + my_user_data.user_message;
    // populating the email with content
    let email_content = {
        // your own email address
        from: "",
        // email address for where you want to send email
        to: "",
        subject: my_user_data.user_name + " Message for the admin",
        text: my_email_body
    }

    // sending out the email
    transporter.sendMail(email_content, function (error, info) {
        console.log(error);
        console.log(info);
    });

    res.send("Your message was sent");
})

// use method to handle the paths not present on our Server. Has to be put at the end of all the paths
app.use(function (req, res) {

    let email_content = {
        // your own email address
        from: "",
        // email address for where you want to send email
        to: "",
        subject: "Hello from node JS",
        text: "Hello from the node js server that is sending this email using nodemailer"
    }

    transporter.sendMail(email_content, function (error, info) {
        console.log(error);
        console.log(info);
    });

    res.send("The path you are trying took for does not exist on our server");
});

// start the server
app.listen(8000, function () {
    console.log("The server has started");
});
