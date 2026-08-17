
function og_func() {
    console.log("Hello from the original function");
}


og_func();

let my_new_function = () => {
    console.log("Hello from the new function");
}

my_new_function();

// using http internal module to create server
let http = require("http");

// using create server method to create an actual server
http.createServer((req, res) => {
    // reading the request coming in
    console.log(req);
    // creating the header of the response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // creating the body of the response that will be visible to the consumer
    res.end("Hello World from Node js file.");
    // setting up the port number on which the server will run
}).listen(8000);