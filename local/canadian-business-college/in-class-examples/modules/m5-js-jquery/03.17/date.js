// storing button element and input element in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");
let another_input = document.getElementById("user_value_second");


// creating a function that extracts value from input element and the find its length to console log
function button_clicked_func() {
    // getting the latest date object
    let my_date = new Date();
    my_result_para.textContent = my_date;

    // millisecond as input for date started from 1 jan 1970
    my_date = new Date(654764764646);
    my_result_para.textContent = my_date;
};