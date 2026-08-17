// Jquery methods

$("#the_button").click(function () {
    // get users input
    let user_filter_val = $("#my_input").val();

    // sjow all items in case hidden
    $(".content_para").show("fast");

    // filter based on text inside the element
    $(".content_para:contains('" + user_filter_val + "')").hide(5000);

});