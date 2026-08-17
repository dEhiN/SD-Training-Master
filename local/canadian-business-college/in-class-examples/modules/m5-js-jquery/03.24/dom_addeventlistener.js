// Add event listener

let my_button = document.getElementById("sub_button");
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");
let my_heading = document.getElementById("my_main_header");
let my_form = document.getElementById("user_form");

// basic add event listener listening to click and executing the function
my_button.addEventListener("click", function () {
    console.log("Hello from the click of the button from the no name function. ");
    console.log("end of console log");
    my_result_para.textContent = "Text from the click of the button";
});

// input event that captures every single input in the input type element
// my_input.addEventListener("input", function(){
//     let my_input_content = my_input.value;
//     my_result_para.textContent = my_input_content;
// });

my_heading.addEventListener("mouseenter", function (event) {
    console.log(event);
    my_heading.style.backgroundColor = "black";
    my_heading.style.color = "white";
});

my_heading.addEventListener("mouseleave", function () {
    my_heading.style.backgroundColor = "green";
    my_heading.style.color = "red";
});

my_input.addEventListener("keydown", function (event) {
    console.log(event);
    // let my_input_content = my_input.value;
    my_result_para.textContent = event.key;
});



my_form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
})

