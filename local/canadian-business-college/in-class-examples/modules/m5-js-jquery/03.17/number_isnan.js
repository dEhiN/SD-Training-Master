// playing with the strings

// storing button element and input element in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");
let another_input = document.getElementById("user_value_second");


// creating a function that extracts value from input element and the find its length to console log
function button_clicked_func() {
    let user_input_number = my_input.value;
    let user_input_number_two = another_input.value;

    // convert string to a number (should be possible)

    // addition
    // my_result_para.textContent = parseInt(user_input_number)  + parseInt(user_input_number_two);

    // subtraction
    // my_result_para.textContent = parseInt(user_input_number) - parseInt(user_input_number_two);

    // multiplication
    // my_result_para.textContent = parseInt(user_input_number)  * parseInt(user_input_number_two);

    // division with float
    my_result_para.textContent = isNaN(parseInt(user_input_number) / parseInt(user_input_number_two));
};