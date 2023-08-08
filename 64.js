// fill method

// value , start , end

const myArray = new Array(10).fill(-6);
// fill the whole array with a value of oyr choice using new keyword to initialise the space and fill method to fill the value.

console.log(myArray);

const myArr = [1,2,3,4,5,6,7,8,9];
myArr.fill(-100,2,5); // .fill( element , start index , end index) // value will get filled to the prev element at the end index
console.log(myArr);