// while loop

let my_num = 100;

// do while loop
// the do area code will execute once no matter if the condition is false from the beginning
do {
    console.log("The value of my num = " + my_num);
    my_num++;
}
while (my_num < 20);


console.log("Hello from outside of the loop");

my_num = 10;

do {
    my_num++;
    console.log("The value of my num = " + my_num);
}
while (my_num < 20);

console.log("Hello from outside of the loop");
