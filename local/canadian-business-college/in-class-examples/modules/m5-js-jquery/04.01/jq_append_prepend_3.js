// Jquery event methods

$("#the_button").click(function () {
    // create an html with the pure html text as string
    let my_anchor_tag = "<a class=\"anchor_y\" href=\"https://yahoo.com\" target=\"_blank\">Go to Yahoo!</a>";
    // create an element and then use text method to add text to it approach
    let my_para = $("<p></p>").text("Hello from the jquery");

    // append the html string to the element of choice
    $("#column_id").append(my_anchor_tag, my_para);

    // prepend the html string to the element of choice
    $("#column_id").prepend(my_anchor_tag, my_para);

});