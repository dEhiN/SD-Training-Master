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
