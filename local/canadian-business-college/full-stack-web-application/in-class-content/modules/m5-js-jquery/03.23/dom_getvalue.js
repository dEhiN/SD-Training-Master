// value get set

// storing button element and input element in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");
let another_input = document.getElementById("user_value_second");

// get content from input value
function button_clicked_func() {
    let my_input_value = my_input.value;
    my_result_para.textContent = my_input_value;
}