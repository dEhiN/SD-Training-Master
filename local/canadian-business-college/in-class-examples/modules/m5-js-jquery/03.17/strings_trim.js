// playing with the strings

// storing button element and input element in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");
let another_input = document.getElementById("user_value_second");

// creating a function that extracts value from input element and the find its length to console log
function button_clicked_func() {
    let user_input_string = my_input.value;
    let user_input_second = another_input.value;

    // Using trim() to remove whitespace from beginning and end of the string.

    my_result_para.textContent = user_input_string.trim() + user_input_second.trim();
};