// if conditional statement

// storing button element and input element in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");
let another_input = document.getElementById("user_value_second");


function button_clicked_func() {
    let my_num_input = parseInt(my_input.value);

    my_result_para.textContent = "";

    if (my_num_input > 100) {
        my_result_para.textContent = "The value of my_num_input is greater than 100";
    }
    else if (my_num_input == 100) {
        my_result_para.textContent = "The value of my_num_input is equal to 100";
    }
    else {
        my_result_para.textContent = "The value of my_num_input smaller than 100";
    }

}