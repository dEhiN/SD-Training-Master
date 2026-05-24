// import file system module fs
let fs = require("fs");
// import the express js module
let express = require("express");
// import cors package
let cors = require("cors");
//include path module
let path = require("path");
// import the dotenv module
let dotenv = require('dotenv');
//include mongo db module
let { MongoClient } = require('mongodb');

// configure the dotenv module for use
dotenv.config();

let uri = process.env.MDBA_MYCLASSDEMOCLUSTER_CONNECT;
uri = uri.replace("<db_username>", process.env.MDBA_MYCLASSDEMOCLUSTER_DB_UNAME);
uri = uri.replace("<db_password>", process.env.MDBA_MYCLASSDEMOCLUSTER_DB_UPWD);

// use your own connection string
let client = new MongoClient(uri);

async function run() {
    await client.connect();
    console.log("Connected to MongoDB");
}

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

app.get("/test_data", function (req, res) {
    // put your own database name
    let my_database = client.db("class_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("User_Info");

    let the_data = {
        name: "Test_user_123",
        age: 40,
        city: "Toronto",
    }

    let saved_data = my_collection.insertOne(the_data);

    res.send("Data saved. Check in mongo db");
});

app.get("/page_not_found", function (req, res) {

    res.send("Page not found");
});

// use method to handle the paths not present on our Server. Has to be put at the end of all the paths
app.use(function (req, res) {
    res.redirect("/page_not_found");
});

// start the server
app.listen(8000, function () {
    console.log("The server has started");
    run();
});
