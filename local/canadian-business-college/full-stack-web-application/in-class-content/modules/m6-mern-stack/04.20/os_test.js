// Import the Operating System module
const os = require('os');
const total_mem = os.totalmem();
const free_mem = os.freemem();

// freemem is a built-in function to the os module that returns the free memory
console.log("Free Memory: " + free_mem);
// totalmem is a built-in function to the os module that returns the total amount of memory
console.log("Total Memory: " + total_mem);
// platform is a built-in function to the os module that returns the platform of the running computer
console.log("Platform: " + os.platform());

os.platform()

console.log(os.arch());