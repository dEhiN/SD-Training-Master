// JS function

let my_add_return_1;
let my_add_return_2;

// declare a function with parameters
function addition_function(number1, number2) {
    let result = number1 + number2;
    return result;
}

function multiply_function(number1, number2) {
    console.log(number1 * number2);
}


// invoke/call the function with arguments and save the return value of the function
my_add_return_1 = addition_function(10, 40);

my_add_return_2 = addition_function(20, 60);

multiply_function(my_add_return_1, my_add_return_2);

