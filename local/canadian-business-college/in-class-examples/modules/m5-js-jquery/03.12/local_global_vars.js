// JS function

let cel_return;

// declaring global variable
let random_var = 100;

// declare a function with parameters
function convert_to_celsius(fer_value) {
    // declaring local variable
    let cel_value = (5 / 9) * (fer_value - 32);
    console.log(cel_value);
    console.log(random_var);
    return cel_value;
}

console.log(random_var);

// invoke/call the function with arguments and save the return value of the function
cel_return = convert_to_celsius(34);

console.log("The celsius value is = " + cel_return + "C");


