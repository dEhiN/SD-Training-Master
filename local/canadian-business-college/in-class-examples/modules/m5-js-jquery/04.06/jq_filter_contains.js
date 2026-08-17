// Jquery methods

$("#the_button").click(function () {
    // filter based on text inside the element
    $(".content_para:contains('B')").hide(5000);

});