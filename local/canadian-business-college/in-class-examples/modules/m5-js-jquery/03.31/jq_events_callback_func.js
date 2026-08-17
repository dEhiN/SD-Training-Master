// Jquery event methods

$("#the_button").click(function () {

    // call back function for one action to finish first before starting another one
    $("#the_para").toggle(4000, function () {
        $("#the_para_2").toggle(4000);
    });



});