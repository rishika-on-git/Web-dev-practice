//hello world prog
"use strict"

console.log("hello world");
console.log(`hello world`);
console.log('hello world');

// variables
"use strict"
var firstName = "rishika";
var firstName = "pinku";
console.log(firstName);

// we use let 

//firstName = "rishi";

// naming of var 
// camel case -- _ or $ 
// $var , _var , var123 ...valid
let firstNamee = "rishika";
 firstNamee = "rishika";

 // use let as it is block scope whwereas var is fxn scope

 const pi = 3.14159;
//  pi = 8; error const
 console.log(pi);


 console.log(firstName[0]);
 console.log(firstName[firstName.length-1]);
console.log(firstName.length);


// toUpperCase // toLowerCase // trim //slice

firstNamee = "               Rishika        ";
console.log(firstNamee);
firstNamee.trim();
console.log(firstNamee);
console.log(firstNamee.length);


firstNamee = firstNamee.trim();
console.log(firstNamee);
console.log(firstNamee.length);

firstNamee = firstNamee.toUpperCase();
console.log(firstNamee);

firstNamee = firstNamee.toLowerCase();
console.log(firstNamee);


// slicing


let newString = firstNamee.slice(1, 4);

console.log(newString);


let age = 18;
age = age+"";
console.log(age);
console.log(typeof age);


firstName = +"34";
console.log(firstName);
console.log(typeof firstName);


// concatenation of strings

let str1 = "rishika";
let str2 ="Aggarwal";
console.log(str1+ "  "+str2);

let s1 = "17";
let s2 = "10";
console.log(s1+s2);


console.log(+s1+ +s2);

// template string 

console.log(`My name is ${str1+ "  "+str2}`)

let myVs = null;
console.log(typeof myVs);

let nm ;
console.log(typeof nm);
console.log( nm);


let myNum = 123;
console.log(myNum);
console.log(Number.MAX_SAFE_INTEGER);

 myNum = BigInt(124578900);
 let numm = 78903840n
console.log(myNum);
console.log(myNum+numm);


let num1 = "7";
let num2 = 7;


console.log(num1 == num2); // == only checks the value not the data type
console.log(num1 === num2); // checks datatype also


// != vs !==
console.log(num1 != num2); // == only checks the value not the data type
console.log(num1 !== num2); // === checks datatype also





































