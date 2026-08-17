// import the express js module
let express = require("express");
// import cors package
let cors = require("cors");
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

// an end point to receive post request from the angular js
app.post("/angular_data", function (req, res) {

    let form_data = req.body;
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("angular_data");

    let the_data = {
        name: form_data.user_name,
        age: form_data.user_age,
        city: form_data.user_city,
        hobby: form_data.user_hobby
    }

    let saved_data = my_collection.insertOne(the_data);

    res.send("request completed");
});

// get end point to serve all the data from the angular_data collection
app.get("/get_angular_data", async function (req, res) {
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("angular_data");

    let db_data = await my_collection.find().toArray();

    res.json(db_data);

})

// start the server
app.listen(8000, function () {
    console.log("The server has started");
    run();
});
