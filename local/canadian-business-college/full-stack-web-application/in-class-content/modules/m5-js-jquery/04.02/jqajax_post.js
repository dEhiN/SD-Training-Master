// Jquery event methods

$("#the_button").click(function () {

    // load the content of a text file into a html element
    $.get("https://randomuser.me/api/", function (data, status, xhr) {

        console.log(data.results[0].dob.age);
        console.log(data.results[0].gender);
        console.log(data.results[0].picture.medium);
        console.log(data.results[0].cell);

    });

    // post request
    $.post("https://abc.com", {
        user_name: "ABC",
        user_age: 50
    }, function (data, status) {

        console.log(status);

    });

});