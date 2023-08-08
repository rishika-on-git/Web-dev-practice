//undefined
//null

// let firstName;
// console.log(typeof firstName); // jb aap koi var bna doge but usme value assign nhi kroge to vo undefined hoga

// // this can be done with both var and let 
// // but const cannot be undefined
// firstName = "RISHIKA";
// console.log(typeof firstName , firstName);  //ek se jyada cheeze bhi print kra skte h console.log mai

let myVar = null ;
console.log(myVar); 

console.log(typeof myVar);  //null h myVar but hme ye object btata haii ye js m bug h galti haii

myVar = "harshit";
console.log( myVar , typeof myVar); 

//BigInt 

let myNum = 123;
console.log(myNum);
console.log(Number.MAX_SAFE_INTEGER); // This is the biggest int you can safely store in js

// agr hme lagta haii kii hme is limit se bda number apne var m store krne ki zroort haii to we use big Int
// koi bhi number BigInt m store kr skte hai even if it is small

let myNumm = BigInt(12);
let samemyNumm = 123n; // this is also a way of storing BigInt
console.log(myNumm + samemyNumm);
//console.log(myNum + samemyNumm); // will give error ... we cannot mix Cannot mix BigInt and other types


