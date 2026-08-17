// Jquery event methods

$("#the_button").click(function () {
    // create an html with the pure html text as string
    let my_anchor_tag = "<a class=\"anchor_y\" href=\"https://yahoo.com\" target=\"_blank\">Go to Yahoo!</a>";
    let my_para = "<p>hello from the jquery!</p>";

    // append the html string to the element of choice
    $("#user_input").after(my_anchor_tag, my_para);

    // prepend the html string to the element of choice
    $("#the_para").before(my_para, my_anchor_tag, my_para);

});