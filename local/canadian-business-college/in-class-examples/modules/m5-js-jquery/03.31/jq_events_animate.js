// Jquery event methods

$("#the_button").click(function () {

    $("#the_para").animate({
        fontSize: "+=8px",
        marginLeft: "+=20px",
        height: "+=40px"
    }, 4000, "swing");

});
