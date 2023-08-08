// let keyword
//declaring a variable with let keyword
// we should use let instead of var

var firstNamee = "Rishika";
var firstNamee = "Rishi"; // This is valid in var but not in let
console.log(firstNamee);


let firstName = "Rishika";
// let firstName = "Pinku" // not valid in let (using let to declare the same var again)

firstName = "Pinku" ; // value can be changed since it is a variable
console.log(firstName);

// block scope vs function scope (covered later)