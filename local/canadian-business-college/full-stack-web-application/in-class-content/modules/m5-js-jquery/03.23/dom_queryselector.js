// querySelector

// storing button element and input element in the variable
// let my_result_para = document.getElementById("result_para");
// let my_input = document.getElementById("user_value");
// let another_input = document.getElementById("user_value_second");


// pick an (first) element using queryselector

let the_result_para = document.querySelector("#result_para");
the_result_para.textContent = "Hello from the Query selector";

// queryselectorall for getting all elements
let my_para_using_class = document.querySelectorAll(".result_para_class")[1];
my_para_using_class.textContent = "Hello from the query selector using class";
