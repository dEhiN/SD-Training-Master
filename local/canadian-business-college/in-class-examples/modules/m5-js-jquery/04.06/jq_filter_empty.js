// Jquery methods

$("#the_button").click(function () {
    // filter based on if its empty
    $(".content_para:empty").css({
        height: "20px",
        width: "50%",
        backgroundColor: "green"
    });

});