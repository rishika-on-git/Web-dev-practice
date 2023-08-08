// PART 2

// HOW JAVASCRIPT WORKS............

// compilation
// code execution

// why compilation

// How js code executes

// what is gloabal execution context 
// what is local execution context

// closures

console.log(this);
console.log(window);
console.log(firstName);

var firstName = "harshit";
console.log(firstName); 


// js m sbse phle code compile hota haii ..mtb poora ek baar m src file bn jyegi 
// na ki interpret hoga


// compilation phase --   2 steps..
// 1. Tokenising or lexing --- code is broken down into small tokens
// 2. Parsing -- in chote chote chunks ko smj ke abstract syntax tree (AST) banta hai -- executable format m code generate hota haii..

// 2nd Phase
//Code generation --  In js code executes inside execution context. mtb code ko execute krne ke liye hme execution context create krna hoga.
// jo sbse phle execution contxt create hota hai use khte hai hm global execution context.
// 

//  ECMA SCRIPT OFFICIAL DOCUMENTATION -- m khi nhi likh hai ki code compile hona chahiye blki ye likha hai ki early error checking honi chahiye
// aur saath me sbhi variables ka appropriate scope pta hona chahiye..(code ke execute hone se phle)

// ab in dono kaam ko krne ke liye hme code ko parse krna hi pdega .. mtb execute krne se phle poore ki checking

// NOW WE WILL TALK ABOUT THE GLOBAL EXECUTION CONTEXT.
// 1. Global execution context
 // a. creation phase of  Global execution context
 // b. code execution phase

 // hme pta hai firstName naam ka var is in global scope
 // jb global execution context create hoga tb firstName naam ka var create ho jyega


//  mtb firstName naam ka var undefined ho jyega (in case of var)
// jb global execution context create hota hai to hmaare pass this ki value save hoti hai
// this ki value depend krti h ki aap apna code kha par execute kar rhe ho. agr aap browser m dekhoge output to difff ayega agr nodejs ke env m dekhoge to diff ayega
// browser m this ki value window hoti hai.. winhdow ek object hota hai jo ki hme browser provide kerta hai

// window object m bht saari properties and key value pairs hote hai.
// Creation phase ko hm global memory bhi kh skte hai

// when control enters an execution context , variable instantiation is performed and this value is determined.

// js is itself a synchronous programming language.(which means jb tk phli line execute nhi ho jati tb tk doosri line execute hona start nhi hogi)
//  Note-
// *JavaScript is a synchronous single-threaded language

// -Single threaded means JavaScript can execute once command at a time
// -Synchronous single-threaded that means JavaScript can execute one command at a time in a specific order.


// o/p 

// window
// window
// undefined
// harshit




