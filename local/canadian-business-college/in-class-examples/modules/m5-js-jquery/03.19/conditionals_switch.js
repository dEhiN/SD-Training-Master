// while loop

// storing button element and input element in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");
let another_input = document.getElementById("user_value_second");

let current_date = new Date();

let day_of_the_week = current_date.getDay();


function button_clicked_func() {
    let my_num_input = parseInt(my_input.value);

    // switch conditional statement
    switch (day_of_the_week) {
        case 0:
            my_result_para.innerText = "Its Sunday";
            break;
        case 1:
            my_result_para.innerText = "Its Monday";
            break;
        case 2:
            my_result_para.innerText = "Its Tuesday";
            break;
        case 3:
            my_result_para.innerText = "Its Wednesday";
            break;
        case 4:
            my_result_para.innerText = "Its Thursday";
            break;
        case 5:
            my_result_para.innerText = "Its Friday";
            break;
        case 6:
            my_result_para.innerText = "Its Saturday";
            break;
        default:
            my_result_para.innerText = "Invalid";
    }
}