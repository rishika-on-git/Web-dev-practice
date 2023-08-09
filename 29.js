// how to clone an array 
// how to concatenate two arrays

// let arr1 = ["item1" , "item2"];
// let arr2 = arr1;

// console.log(arr1 ===arr2);
// how to clone an array 

// but this way of cloning each element completely is not a good way
let arr1 = ["item1" , "item2"];
let arr2= ["item1" , "item2"];
console.log(arr1 ===arr2); // false as both are separate arrays have diff pointers 

arr1.push("item 3");
console.log(arr1 );
console.log(arr2 );

// good way of cloning -- slicing 
let array2 = arr1.slice(0);

console.log(arr1 ===arr2);
arr1.push("item 3");

console.log(arr1 );
console.log(arr2 );

// method 2 -- concat -- empty array m concat krna h array 1 

let arrayy2 = [].concat(arr1);
console.log(arr1 ===arr2);
arr1.push("item 3");
console.log(arr1 );
console.log(arr2 );

// new wayy -- spread operator 

let arrayyy2 = [...array2]; // ... is spread operator ye arr2 m arr1 ke elements ko spread kr dega
console.log(arr1 ===arr2);
arr1.push("item 3");
console.log(arr1 );
console.log(arr2 );
// Fastest way is slicing but any can be used


//  NOW IF WE NEED AN ARRAY THAT CONTAINS ALL ELEMENTS OF OTHER ARRAY AND SOME EXTRA OF ITS OWN 


let array1 = ["aa" ,"bb" , "cc"];
let oneMoreArray = ["aaaa" ,"bbbbb" , "ccccc"];
let arrr2 = array1.slice(0).concat(["dd" , "ee"]);
// or  let arrr2 = [].concat(arr1 ,["dd" , "ee"] );
// or let arrr2 = [...array1 ,"dd" , "ee" , ...oneMoreArray ]; // ek se jyada arrays spread kar skte hai
console.log(array1 );
console.log(arrr2 );





