// Global variables
let str_var = "My name is David Watson.";
let num_var = 42;
let bool_var = true;
let fruit_arr = [
    "mango",
    "banana",
    "pineapple",
    "passion fruit",
    "kiwi",
    "apple",
    "tangerine"
]
let user_obj = {
    firstName: "Stan",
    lastName: "Smith",
    age: 54,
    city: "Langley Falls",
    state: "Virginia",
    occupation: "CIA Operative"
}

// Enum constant for use in the calculator
const CALC_VALS = Object.freeze({
    ADDITION: 1,
    SUBTRACTION: 2,
    MULTIPLICATION: 3,
    DIVISION: 4
});

// ASSIGNMENT PART 1
/** Function name: partOne
 * This function updates the five paragraph elements in the HTML part 1
 * div with the contents of the global variables. It also prettifies the
 * output a little bit.
 * 
 * Parameters: None
 * Returns: None
 */
function partOne() {
    // Get the five paragraph elements
    let para_part1_string = document.getElementById("para-part1-string");
    let para_part1_number = document.getElementById("para-part1-number");
    let para_part1_boolean = document.getElementById("para-part1-boolean");
    let para_part1_array_fruits = document.getElementById("para-part1-array-fruits");
    let para_part1_object_user = document.getElementById("para-part1-object-user");

    // Update the elements with the required content
    para_part1_string.textContent = str_var;

    para_part1_number.textContent = `My age is ${num_var}`;

    para_part1_boolean.textContent = "Am I a student at Canadian Business College? ";
    // Mini if statement to handle the boolean variable :P
    if (bool_var) {
        para_part1_boolean.textContent += "Yes";
    }
    else {
        para_part1_boolean.textContent += "No";
    }

    // Create the output for the array so the items can be shown as a list 
    // and then update the paragraph
    let fruit_arr_content = "These are some fruits that I love:";
    fruit_arr_content += `<ul class="iterable-list">`
    for (fruit of fruit_arr) {
        fruit_arr_content += `<li class="iterable-list-item">${fruit}</li>`;
    }
    fruit_arr_content += "</ul>"
    para_part1_array_fruits.innerHTML = fruit_arr_content;

    // Create the output for the user object in the same way as the array
    let user_obj_content = "Here is a fake user I created:"
    user_obj_content += `<ol class="iterable-list">`;
    for (property in user_obj) {
        user_obj_content += `<li class="iterable-list-item">Property name: <span class="usr-obj-prop usr-obj-prop-name">${property}</span></li>`;
        user_obj_content += `<li class="iterable-list-item">Property value: <span class="usr-obj-prop usr-obj-prop-value">${user_obj[property]}</span></li>`;
    }
    user_obj_content += "</ol>";
    para_part1_object_user.innerHTML = user_obj_content;
}


// ASSIGNMENT PART 2
/** Function name: partTwo
 * This function handles part two of the assignment, the calculator portion. It 
 * first gets the values of the two input fields, does some validation on them, 
 * and converts them to numbers. It also validates the op_type variable passed in 
 * (see below). It then passes those onto the calculator function to do the actual 
 * mathematical operation. Finally, it updates the paragraph designated for the 
 * results.
 *  
 * Parameters:
 *            op_type - a numeric value that specifies the type of mathematical 
 *                      operation to perform; the list of accepted values is 
 *                      given in the Enum constant CALC_VALS
 * 
 * Returns: None
 */
function partTwo(op_type) {
    // Get the results paragraph element object and reset its contents to 
    // blank
    let para_calc_results = document.getElementById("para-calc-results");
    para_calc_results.textContent = "";

    // Get the input values
    let input_num1 = document.getElementById("input-num1").value;
    let input_num2 = document.getElementById("input-num2").value;

    // Confirm that something was entered in both fields
    if (!input_num1 && !input_num2) {
        para_calc_results.textContent = "Please enter 2 numbers in the input fields!";
    }
    // Confirm what the user entered are numbers. Since input field types are
    // set to number, this check may not be necessary but it's better to have 
    // an extra layer of checking
    else if (isNaN(input_num1) || isNaN(input_num2)) {
        para_calc_results.textContent = "Please enter valid numbers!";
    }
    // Confirm that what was passed in for the parameter op_type is a number
    else if (isNaN(op_type)) {
        para_calc_results.textContent = "Something went wrong with the calculation!";
    }
    // Call the calculator function and pass in the appropriate parameters
    else {
        let result = calculator(Number(input_num1), Number(input_num2), op_type);
        para_calc_results.textContent = result;
    }
}
/** Function name: calculator
 * This function handles the calculator section. Depending on the specific
 * button the user presses, a different value is passed in along with the
 * two inputted number.
 * 
 * Parameters:
 *            num1 - the first number to use for the operation
 *            num2 - the second number to use for the operation
 *            op_type - a numeric value that specifies the type of mathematical 
 *                      operation to perform; the list of accepted values is 
 *                      given in the Enum constant CALC_VALS
 * 
 * Returns:
 *         result - a prettified string with the the result of performing the 
 *                  requested mathematical operation on num1 and num2
*/
function calculator(num1, num2, op_type) {
    // Create return variable
    let result = "The return of ";

    // Check op_type
    switch (op_type) {
        case CALC_VALS.ADDITION:
            result += `adding ${num1} and ${num2} is: ${num1 + num2}`;
            break;
        case CALC_VALS.SUBTRACTION:
            result += `subtracting ${num1} from ${num2} is: ${num1 - num2}`;
            break;
        case CALC_VALS.MULTIPLICATION:
            result += `multiplying ${num1} and ${num2} is: ${num1 * num2}`;
            break;
        case CALC_VALS.DIVISION:
            result += `dividing ${num1} by ${num2} is: ${num1 / num2}`;
    }

    return result;
}
/** Function name: clearResults
 * This function simply clears any existing printed results from the results 
 * paragraph
 *  
 * Parameters: None
 * Returns: None
 */
function clearResults() {
    // Get the results paragraph element object and reset its contents to 
    // blank
    let para_calc_results = document.getElementById("para-calc-results");
    para_calc_results.textContent = "";
}


// ASSIGNMENT PART 3
/** Function name: partThree
 * This function creates a new fruit array using the values given in the
 * instructions example. It then loops through the array and logs each
 * item to the console in the required formatted.
 * 
 * Parameters: None
 * Returns: None
 */
function partThree() {
    let new_fruit_arr = [
        "Apple",
        "Banana",
        "Cherry",
        "Dragon fruit",
        "Elderberry",
        "Fig",
        "Grape",
        "Honeydew",
        "Kiwi",
        "Lemon"
    ]

    for (fruit of new_fruit_arr) {
        console.log(`The fruit is - ${fruit}`);
    }
}


// ASSIGNMENT PART 4
/** Function name: partFour
 * This function loops creates a new user object using the values given in 
 * the instructions example. It then loops through the user_obj object and 
 * logs each property to the console in the required formatted.
 * 
 * Parameters: None
 * Returns: None
*/
function partFour() {
    let new_usr_obj = {
        firstName: "Alex",
        lastName: "Smith",
        age: 25,
        city: "Toronto",
        isStudent: true
    }

    for (property in new_usr_obj) {
        console.log(`The User info is - ${new_usr_obj[property]}`);
    }
}


/** Main section of code
 * This section calls the functions for 3 and 4.
 * The functions for parts 1 and 2 are called through JS trigger events in the HTML.
 */
partThree();
partFour();