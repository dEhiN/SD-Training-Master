// import os module to get insight about your operating system
let os = require("os");

// get the architecture using OS module
console.log("The Architecture is - " + os.arch());

// get the free memory in bytes and convert into GB
console.log("Free memory in my PC - " + (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB");

// get the total memory in bytes convert into GB
console.log("Total memory in my PC - " + (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB");

// get user info username
console.log("User info for this PC - " + os.userInfo().username);

// computer uptime
console.log("My PC has been running for - " + (os.uptime() / 60 / 60).toFixed(2) + " hours");