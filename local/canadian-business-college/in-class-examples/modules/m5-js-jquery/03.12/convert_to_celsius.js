// JS function

let cel_return;

// declare a function with parameters
function convert_to_celsius(fer_value) {
    let cel_value = (5 / 9) * (fer_value - 32);
    return cel_value;
}


// invoke/call the function with arguments and save the return value of the function
cel_return = convert_to_celsius(34)

console.log("The celsius value is = " + cel_return + "C");

