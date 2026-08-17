// import file system module fs
let fs = require("fs");

// write to the file (create if does not exist)
fs.writeFileSync("demo.txt", "Hello from the node js file!");

// read and save content of the file in the variable
let content_of_the_file = fs.readFileSync("demo.txt", "utf8");

console.log("Content of the file is - " + content_of_the_file);