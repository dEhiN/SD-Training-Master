
app.get("/delete_data", function (req, res) {
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("User_info");

    // content to filter with
    let filter_record = { name: "Test_B" }

    // delete one record
    let _delete_result = my_collection.deleteOne(filter_record);

    res.send("User Deleted");
})
