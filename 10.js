// template string

let age = 18;
let firstName = "rishika";

// "my name is rishika and my age is 18"

//let aboutMe = "my name is " + firstName + " and my age is " + age ;

// This is quite tedious adding + in btw and "" so this work can be mad easy using template string

let aboutMe = ` my name is ${firstName} and my age is ${age}`;

// we use bacticks in template string
console.log(aboutMe);


