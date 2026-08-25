// This is for Assignment 1 of the "Advanced Frontend - JavaScript & jQuery" module

/**
Part 1: Data Types & Logging
Requirements:
    Create one variable for each piece of data below. Use console.log() to display every variable.
    - 100
    - 500
    - 10.20
    - Hello world
    - Testing string
    - true
    - false
    - What's the weather 
    - They said "hello" together 
 */
const assignment_array = [
    100,
    500,
    10.20,
    "Hello world",
    "Testing string",
    true,
    false,
    "What's the weather",
    "They said \"hello\" together"
];

function printElement(element) {
    console.log(element);
}

console.log("Part 1:")
assignment_array.forEach(printElement);


/**
Part 2: Function Mastery
Follow these specific rules for your functions. Each must be called twice to demonstrate different outcomes other than the function without parameters.
1) Function without Parameters: Should simply console.log "Hello World". 
2) Function with Parameters: Should take two numbers and perform division.
3) Function with Return Value: Should take two two numbers and return multiplication value of these two numbers. Console log the returned value outside of the function.
 */
function printHelloWorld() {
    console.log("Hello World!");
}

function twoNumberDivision(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        console.log(`The division of ${num1} and ${num2} is: ${num1 / num2}`);
    } else {
        console.log("Two valid numbers need to be passed to the function 'twoNumberDivision'!");
    }
}

function twoNumberMultiplication(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return (num1 * num2);
    } else {
        console.log("Two valid numbers need to be passed to the function 'twoNumberMultiplication'!")
        return NaN;
    }
}

console.log("\nPart 2:")
printHelloWorld();
twoNumberDivision(5, "test");
twoNumberDivision(10, 2);
twoNumberMultiplication("hi", 67);
const result = twoNumberMultiplication(86, 65);
console.log(`The multiplication result is: ${result}`);


/**
Part 3: HTML manipulation
Follow these rules to perform the HTML manipulation:
1) Create 1 paragraph and give it a Unique id. Create 2 h1 elements with same class name example my_heading.
2) Pick the paragraph using the ID in javascript and change its textcontent.
3) Pick the h1 element using the class name and the change the content of each h1 element with different text.
 */
id_my_para = document.getElementById("my_para");
class_my_heading = document.getElementsByClassName("my_heading");

id_my_para.textContent = "I've changed this paragraph's text content using JavaScript!";

for (let i = 0; i < class_my_heading.length; i++) {
    class_my_heading[i].textContent = `This is the heading at index: ${i}`;
}
