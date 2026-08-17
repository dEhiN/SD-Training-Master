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
//include dotenv
let dotenv = require("dotenv");

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

// post endpoint that handles and manages data coming from react and saved into mongo db
app.post("/react_data", function (req, res) {

    let form_data = req.body;
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("react_data");

    let the_data = {
        name: form_data.user_name,
        age: form_data.user_age,
        city: form_data.user_city,
        hobby: form_data.user_hobby,
        country: form_data.user_country
    }

    let saved_data = my_collection.insertOne(the_data);

    res.send("request completed");
});

// get end point to serve all the data from the react_data collection
app.get("/get_react_data", async function (req, res) {
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("react_data");

    let db_data = await my_collection.find().toArray();

    res.json(db_data);

})

// a method to help us fetch records from the database
app.get("/fetch-data", async function (req, res) {
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("User_info");

    // limit the maximum number of data that can be sent to you from the database
    let db_data = await my_collection.find().limit(10).toArray();

    console.log(db_data);

    // handle the case where the filter fetches us no data, using array.length method to find the length of array
    if (db_data.length == 0) {
        res.send("No data for the filter applied!");
    }
    else {
        res.send("data fetched!");
    }

})


app.get("/get_user_list", async function (req, res) {
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("User_info");

    let db_data = await my_collection.find({}, { projection: { _id: 0 } }).toArray();

    res.json(db_data);

})

app.get("/users", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "templates", "users.html"));
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

