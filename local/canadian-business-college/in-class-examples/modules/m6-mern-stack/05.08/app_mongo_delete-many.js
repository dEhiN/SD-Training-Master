
app.get("/delete_data", function (req, res) {
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("User_info");

    // content to filter with
    let filter_record = { age: 40 };

    // delete all records matching the filter criteria
    let _delete_result = my_collection.deleteMany(filter_record);

    res.send("User Deleted");
})