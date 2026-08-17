const obj1 = {
    Field1: "Test",
    Field2: 26
}

let obj2 = {
    Field1: "NewTest",
    Field2: 32
}

console.log("Object 2:");
console.log(obj2);
obj2.Field1 = "NewChangedText";
obj2.Field2 += 10;
console.log(obj2);

console.log("Object 1:");
console.log(obj1);
obj1.Field1 = "ChangedText";
obj1.Field2 -= 10;
console.log(obj1);