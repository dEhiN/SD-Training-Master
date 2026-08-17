// Document

// pick an element using ID
let my_header = document.getElementById("my_main_header");

console.log(my_header);

// picking elements using class
let my_paragraphs = document.getElementsByClassName("my_para");

console.log(my_paragraphs);

// picking elements using tag
let my_anchor_tags = document.getElementsByTagName("a");

console.log(my_anchor_tags);

my_header.textContent = "Javascript Document manipulation";
my_header.style.backgroundColor = "black";
my_header.style.color = "white";

// extracting elements from the array
let my_first_paragraph = my_paragraphs[0];
let my_second_paragraph = my_paragraphs[1];

my_first_paragraph.textContent = "Hello para from the javascript";
my_first_paragraph.style.backgroundColor = "black";
my_first_paragraph.style.color = "white";


my_second_paragraph.textContent = "Hello another para from javascript as well";
my_second_paragraph.style.backgroundColor = "black";
my_second_paragraph.style.color = "white";

// extracting elements from the array
let my_first_anchor_tag = my_anchor_tags[0];
let my_second_anchor_tag = my_anchor_tags[1];

my_first_anchor_tag.textContent = "Go to Google";
my_second_anchor_tag.textContent = "Go to yahoo";