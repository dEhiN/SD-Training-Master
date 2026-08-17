// Jquery event methods

$("#the_button").click(function () {

    // read the href attribute of anchor tag
    let anchor_href = $("#anchor_g").attr("href");
    console.log(anchor_href);

    // read the type of input
    let input_type = $("#user_input").attr("type")
    console.log(input_type);

});