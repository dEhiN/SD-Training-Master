// Jquery event methods

// getting rid of $ as jquery identifier dependency and using keyword jQuery
$.noConflict();

jQuery("#the_button").click(function () {

    // call back function for one action to finish first before starting another one
    jQuery("#the_para").toggle(4000, function () {
        jQuery("#the_para_2").toggle(4000);
    });

});