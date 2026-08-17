// Creating a user object
let user_obj = {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    isAdmin: false,
    loginCount: 5,
    city: "Toronto",
    code_type: "JS"
};

// For in loop
// For in loop with object
// works the best with the object
for (let user_info in user_obj) {
    console.log(user_info);
    // extracting from the object will need a square bracket approach here
    console.log(user_obj[user_info]);
}

console.log("hello from the outside of the loop")