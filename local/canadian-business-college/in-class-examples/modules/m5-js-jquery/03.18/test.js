/**
let startTime = new Date().getTime();

for (let i = 0; i < 100; i++) {
    let x = i;
    console.log(i);
}

let endTime = new Date().getTime();

console.log(endTime - startTime);
*/

// for (let i = 0; i > 10; i++) {
//     console.log(i);
// }

const numbers = [45, 4, 9, 16, 25];
for (let x in numbers) {
    console.log(x);
    console.log(numbers[x]);
}
const person = {
    fname: "John",
    lname: "Doe",
    age: 25
}
for (let x in person) {
    console.log(x);
    console.log(person[x]);
}