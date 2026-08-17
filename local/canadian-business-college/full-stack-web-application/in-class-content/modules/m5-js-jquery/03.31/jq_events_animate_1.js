// Jquery event methods

$("#the_button").click(function () {

    $("#the_para").animate({
        fontSize: "+=8px",
        marginLeft: "+=20px",
        height: "+=40px"
    }, 4000, "swing");

});


$("#second_button").click(function () {

    $("#box").animate({
        marginLeft: '+=10px',
        opacity: '0.7',
        height: '+=30px',
        width: '-=30px'
    }, 3000, "swing");

});
