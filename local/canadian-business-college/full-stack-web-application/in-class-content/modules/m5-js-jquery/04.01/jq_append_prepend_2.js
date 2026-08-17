// Jquery event methods

$("#the_button").click(function () {
    // create an html with the pure html text as string
    let my_anchor_tag = "<a class=\"anchor_y\" href=\"https://yahoo.com\" target=\"_blank\">Go to Yahoo!</a>";

    // append the html string to the element of choice
    $("#column_id").append(my_anchor_tag);

    // prepend the html string to the element of choice
    $("#column_id").prepend(my_anchor_tag);

});