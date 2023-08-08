// for loop in array

let fruit = ["apple", "mango", "grapes", "litchi", "guava"];

console.log(fruit.length);
console.log(fruit[1]);
console.log(fruit[fruit.length - 1]);

console.log("Printing the array using for loop");

for (let i = 0; i < fruit.length; i++) {

    console.log(fruit[i]);

}

// task to print in upper case
let fruit2 = [];
for (let i = 0; i < fruit.length; i++) {

    fruit2.push(((fruit[i]).toUpperCase()));

}
console.log(fruit2);



