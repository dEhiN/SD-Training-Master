// import file system module fs
let fs = require("fs");

// read file content using async method
fs.readFile("demo.txt", "utf8", function (err, data) {
    if (err) {
        console.log("There was an error - " + err)
    }
    else {
        console.log("Content of the file is - " + data);
    }

});

// this console log will execute before the above async method
console.log("Hello from the end of the node js file");

