
app.get("/update_users", function (req, res) {
    // put your own database name
    let my_database = client.db("class_batch_8_demo_db");

    // put your own collection name
    let my_collection = my_database.collection("User_info");

    // content to filter with
    let filter_record = { age: 40 }

    // content to update with
    let update_content = {
        $set: {
            city: "Ajax",
            hobby: "Football"
        }
    }

    // update all record based on the filter
    let update_result = my_collection.updateMany(filter_record, update_content);

    res.send("User Updated");
})