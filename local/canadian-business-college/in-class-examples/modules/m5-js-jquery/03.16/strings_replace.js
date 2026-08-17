// playing with the strings

// storing button element and input element in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");

// creating a function that extracts value from input element and the find its length to console log
function button_clicked_func() {
    let user_input_string = my_input.value;
    // user_input_string.replace() to replace part of the string

    // replace takes two item, first is what to replace and second is with what to replace
    my_result_para.textContent = user_input_string.replace("hello", "no-hello");
};