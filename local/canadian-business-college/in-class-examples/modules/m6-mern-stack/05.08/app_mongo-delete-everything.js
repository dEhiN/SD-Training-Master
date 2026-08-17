
app.get("/delete_data", function (req, res) {
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("User_info");

    // content to filter with
    // let filter_record = {age: 40};

    // deletes all data from collection
    let _delete_result = my_collection.deleteMany();

    res.send("User Deleted");
})