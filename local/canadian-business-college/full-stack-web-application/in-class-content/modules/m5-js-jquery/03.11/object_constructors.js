// data type - object
// object using constructor


function my_user(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let user_1 = new my_user("Jacob", 40, "Toronto");

let user_2 = new my_user("James", 20, "Montreal");

let user_3 = new my_user("XYZ", 45, "Ottawa");

console.log(user_1);

console.log(user_2);

console.log(user_3);
