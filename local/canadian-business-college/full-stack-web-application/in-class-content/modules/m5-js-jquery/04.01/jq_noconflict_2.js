// Jquery event methods

// getting rid of $ as jquery identifier dependency and using our own variable
let jq = $.noConflict();

jq("#the_button").click(function () {

    // call back function for one action to finish first before starting another one
    jq("#the_para").toggle(4000, function () {
        jq("#the_para_2").toggle(4000);
    });

});