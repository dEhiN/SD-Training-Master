// Jquery event methods

$("#the_button").click(function () {

    // set the href attribute of anchor tag
    $("#anchor_g").attr("href", "https://yahoo.com");

    // set the type of input
    $("#user_input").attr({
        type: "number",
        value: 12345
    });

});