// Try catch block

function demo_error_handeling() {
  try {
    let my_num = 100 / random_variable;
    console.log(my_num);
  } catch (error) {
    console.log("The error that happened is - " + error.message);
  } finally {
    console.log("Called from Finally block");
  }
}

demo_error_handeling();

console.log("Hello from outside");
