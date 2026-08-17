// classic for loop
// starts from 0
// end when value of i is equals to or greater than 100
// increments by 1 each time
for (let i = 0; i < 100; i++) {
    console.log(i);
}

console.log("On to the next loop");

// starts from 10
// end when value of i is equals to or greater than 1000
// increments by 10 each time
for (let i = 10; i < 1000; i += 10) {
    console.log(i);
}

console.log("hello from the outside of the loop")

// classic for loop
// starts from 10
// end when value of i is equals to or less than 0
// decrement by 1 each time
for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("To the other loop")

// starts from 100
// end when value of i is equals to or less than -10
// decrement by 5 each time
for (let i = 100; i > -10; i -= 5) {
    console.log(i);
}

console.log("hello from the outside of the loop")

let my_arr = ["Apple", "Orange", "Mango", "Cherry", "Pinapple"]

// classic for loop
for (let i = 0; i < 5; i++) {
    console.log("The fruit from the loop is -" + my_arr[i]);
}

console.log("hello from the outside of the loop")
