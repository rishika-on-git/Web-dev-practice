// array push pop
// array shift unshift

// strings are diff from arrays as they are immutable so these functions cannotbe performed in a str

let fruit = ["apple" , "mango" , "grapes"];
console.log(fruit);

//push
fruit.push("litchi");
console.log(fruit);

//fruit.pop(); // removes last element and returns it
let poppedFruit = fruit.pop();
console.log("popped fruit is " , poppedFruit);


console.log(fruit.pop());
console.log(fruit);


// adding element to the start

// unshift

fruit.unshift("blueberry");
fruit.unshift("avocado");
fruit.unshift("cherry");

console.log(fruit);


// shift -- removes element from the start

fruit.shift();
console.log(fruit);

// also returns the shifted element

let removedFruit = fruit.shift();
console.log("removed fruit is " , removedFruit);

// push and pop are faster as compared to shift and unshift

// bcoz shift unshift ko memory m phle saare elements ko aage shift krna pdega phir remove ya add krege
// jbki push and pop ko bs last elemnt ko access karna hai directly





















