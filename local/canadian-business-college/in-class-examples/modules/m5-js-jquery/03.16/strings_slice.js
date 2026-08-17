// playing with the strings

// storing button element and input element in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");

// creating a function that extracts value from input element and the find its length to console log
function button_clicked_func() {
    let user_input_string = my_input.value;
    // user_input_string.slice() to find the length of the string
    // only one number means defining only the starting point and going all the way to the end
    // my_result_para.textContent = user_input_string.slice(2);

    // for two numbers means first is the starting point which is included and second number is ending point which is not included (last minus 1)
    my_result_para.textContent = user_input_string.slice(2, 8);

    // negative value means start from the back
    // my_result_para.textContent = user_input_string.slice(-2);


};