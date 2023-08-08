// typeof , string to number , number to string conversion
/*
data types

string "harshit"
number 2 , 4 , 5.6
booleans
undefined
null
Big Int
Symbol
*/

let age = 22;
let firstName = "rishii";

// typeof operator tells us the datatype
console.log(typeof age);
console.log(typeof firstName);


// convert number to string 
console.log(typeof(age + ""));  // number + empty string == string 
age = age +"";
console.log(typeof(age)); // -- string --- value  is "22"

// convert string to number 

// to do this str se phle + lga do

let myStr = +"34";
console.log(typeof(myStr)); // -- number value is 34

// USING OTHER METHODS 
// USING NUMBER AND STRING METHOD

let agee = "18";
agee = Number(age);
console.log(typeof(agee)); 


let ages = 18
ages = String(ages);
console.log(typeof(ages)); 






