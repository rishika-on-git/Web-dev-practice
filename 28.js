//PRIMITIVE VS REFERENCE DATA TYPES


// primitive data types -- numbers (eg)
let num1 =6;
let num2 = num1;

console.log("value of num1 is " , num1);
console.log("value of num2 is " , num2);
num1++;
console.log("after incrementing num1");
console.log("value of num1 is " , num1);
console.log("value of num2 is " , num2);
// working as expected

// memory m stack m num1 aur num2 ke liye alg alg jga haii
// to num1 ka chng num2 m reflect nhi hoga


// refernece data types
//arrays

let arr1 = ["item1" , "item2"];
let arr2 = arr1;

console.log("array 1  : " , arr1);
console.log("array 2  : " , arr2);

// some change in arr 1
arr1.push("item 3");
// or change in arr2 
//arr2.push("item 3");

console.log("after pushing element to array 1")
console.log("array 1  : " , arr1);
console.log("array 2  : " , arr2);

// change in arr1 also reflected in arr2 
// as array is a big data type
// so if we copy array their first pointers are copied means arr1 and arr2 point to same location
// so if change in arr1 then will also reflect in arr2 and vice versa

// arrays are stored in heap and their pointers in stack
















