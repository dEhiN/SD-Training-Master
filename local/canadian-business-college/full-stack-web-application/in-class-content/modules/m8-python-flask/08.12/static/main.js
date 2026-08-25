// main.js

let my_button = document.getElementById("page_Heading");

function say_hello() {
    alert("hello from JS");
}

my_button.addEventListener("click", say_hello);