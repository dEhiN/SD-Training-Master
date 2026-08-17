// playing with the strings

// storing button element and input element in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");

// creating a function that extracts value from input element and the find its length to console log
function button_clicked_func() {
    let user_input_string = my_input.value;
    // user_input_string.uppercase() change the string to uppercase

    // convert to uppercase
    my_result_para.textContent = user_input_string.toUpperCase();
    my_result_para.textContent = user_input_string.toLowerCase();
};