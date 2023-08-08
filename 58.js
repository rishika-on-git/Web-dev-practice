// filter method

const numbers = [1, 3, 2 , 6 , 4 , 8];
//we can filter evn nos ..odd nos etc..


// filter ka call back fxn hmesha ek boolean value return krna chahiye
// either true or false

// const isEven = (num)=>{
//   return num%2===0;
// }

// const evenNum = numbers.filter(isEven);
// console.log(evenNum);

// 
const evenNum = numbers.filter((num)=>{
    return num%2===0;
});
console.log(evenNum);