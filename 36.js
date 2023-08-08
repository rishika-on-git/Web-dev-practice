//objects
// objects are also reference types 
// arrays are good but not sufficient for real world data.
// objects store data in key value pairs 
// objects dont have index


// how to create objects

// const person = {name : "Harshit" , age: 22}; // curly braces used for objects.
// console.log(person);


// // how to access data from objects

// console.log(person.name);
// console.log(person.age);

// we can also store arrays in a object.

const person = {
    name: "Harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]

};

console.log(person);
console.log(person.hobbies);


// how to add key value pair from objects

person.gender = "male";
// person["gender"]="male"; // can also be done
console.log(person);


// js ke andr keys string m store hoti haii so " " or '' are necesssaryyy..
console.log(person["name"]);

















