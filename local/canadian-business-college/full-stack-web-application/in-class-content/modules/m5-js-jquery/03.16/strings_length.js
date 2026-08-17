// playing with the strings

// storing button element and input element in the variable
let my_button = document.getElementById("sub_button");
let my_input = document.getElementById("user_value");

// creating a function that extracts value from input element and the find its length to console log
function button_clicked_func() {
    let user_input_string = my_input.value;
    // user_input_string.length to find the length of the string
    console.log(user_input_string.length);
};
