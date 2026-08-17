// import file system module fs
let fs = require("fs");

// append to the file (create if does not exist)
fs.appendFileSync("demo.txt", "\nHello from the node js file!");

// read and save content of the file in the variable
let content_of_the_file = fs.readFileSync("demo.txt", "utf8");

console.log("Content of the file is - " + content_of_the_file);