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

app.get("/user_form", function (req, res) {
    // read from the file
    res.sendFile(path.join(__dirname, "public", "templates", "form.html"));
})

app.get("/contact", function (req, res) {
    // read from the file
    res.sendFile(path.join(__dirname, "public", "templates", "contact.html"));
});

app.post("/form_data", function (req, res) {

    let form_data = req.body;
    // put your own database name
    let my_database = client.db("class_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("User_Info");

    let the_data = {
        name: form_data.u_name,
        age: form_data.u_age,
        city: form_data.u_city,
        hobby: form_data.u_hobby
    }

    let saved_data = my_collection.insertOne(the_data);

    console.log(saved_data);

    res.redirect("/user_form");
});

// a method to help us fetch records from the database
app.get("/fetch-data", async function (req, res) {
    // put your own database name
    let my_database = client.db("class_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("User_Info");

    // get one record from the collection (first record)
    let db_data = await my_collection.find().toArray();
    console.log(db_data);

    // get one record from the collection (first record)
    db_data = await my_collection.findOne();
    console.log(db_data);

    // get one record from the collection (first record), filtered by city
    db_data = await my_collection.findOne({ city: "Toronto" });
    console.log(db_data);

    // handle the case where the filter fetches us no data
    if (db_data == null) {
        res.send("No data for the filter applied!")
    }
    else {
        res.send("dDta fetched!")
    }

    // get all records from the collection (first record), filtered by city
    db_data = await my_collection.find({ city: "Toronto" }).toArray();

    // handle the case where the filter fetches us no data, using array.length method to find the length of array
    if (db_data.length == 0) {
        res.send("No data for the filter applied!")
    }
    else {
        res.send("data fetched!")
    }

    // get all records matching all the filters by and condition
    let db_data = await my_collection.find({ city: "Toronto", age: 10 }).toArray();

    // get all records matching all the filters by or condition
    let db_data = await my_collection.find({ $or: [{ city: "Toronto" }, { city: "Vancouver" }] }).toArray();

    // get all records greater than criteria
    let db_data = await my_collection.find({ age: { $gt: 30 } }).toArray();

    // get all records less than criteria
    let db_data = await my_collection.find({ age: { $lt: 30 } }).toArray();

    // get all records less than equal to criteria
    let db_data = await my_collection.find({ age: { $lte: 30 } }).toArray();

    // get all records greater than equal to criteria
    let db_data = await my_collection.find({ age: { $gte: 30 } }).toArray();
})

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
