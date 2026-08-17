// import file system module fs
let fs = require("fs");
// import the express js module
let express = require("express");
// import cors package
let cors = require("cors");
//include path module
let path = require("path");
//include mongo db module
let { MongoClient } = require('mongodb');

// use your own connection string
let uri = "";
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

app.get("/user_form", function (req, res) {
    // read from the file
    res.sendFile(path.join(__dirname, "public", "templates", "form.html"));
})

app.post("/form_data", function (req, res) {

    let form_data = req.body;
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("User_info");

    let the_data = {
        name: form_data.u_name,
        age: form_data.u_age,
        city: form_data.u_city,
        hobby: form_data.u_hobby
    }

    let saved_data = my_collection.insertOne(the_data);

    res.redirect("/user_form");
});

// a method to help us fetch records from the database
app.get("/fetch-data", async function (req, res) {
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("User_info");

    // filter records and pick only the key from each record by your own choice 
    let db_data = await my_collection.find({ age: 30 }, { projection: { name: 1, _id: 0 } }).toArray();

    console.log(db_data);

    // handle the case where the filter fetches us no data, using array.length method to find the length of array
    if (db_data.length == 0) {
        res.send("No data for the filter applied!");
    }
    else {
        res.send("data fetched!");
    }

})

app.get("/page_not_found", async function (req, res) {

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
