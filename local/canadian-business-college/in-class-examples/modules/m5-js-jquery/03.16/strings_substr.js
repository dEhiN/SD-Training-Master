// playing with the strings

// storing button element and input element in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");

// creating a function that extracts value from input element and the find its length to console log
function button_clicked_func() {
    let user_input_string = my_input.value;
    // user_input_string.substr() to find the length of the string

    // in substr the first number is the starting point and second is the length of extraction
    // my_result_para.textContent = user_input_string.substr(3, 2);

    //  if provided one number only that becomes the starting point and rest of the string is extracted till the end
    my_result_para.textContent = user_input_string.substr(3);


};