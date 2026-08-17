// Jquery event methods

$("#the_button").click(function () {

    // load the content of a text file into a html element
    $.get("https://catfact.ninja/fact", function (data, status, xhr) {

        console.log(data.fact);
        $("#content_para").text(data.fact);

    });

});