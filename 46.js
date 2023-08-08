// arrow function

// const singHappyBirthday = function(){
//     console.log("happyyyyyyyyyyy birthdayyy to youu ....................");

// }

// arrow fxn of above function
const singHappyBirthday = () => {
    console.log("happyyyyyyyyyyy birthdayyy to youu ....................");

}
singHappyBirthday();



// const sumThreeNumbers = function(num1, num2 , num3){
//     return num1 + num2+num3;

// }


const sumThreeNumbers = (num1, num2, num3) => {
    return num1 + num2 + num3;

}
console.log(sumThreeNumbers(3, 7, 9));



// const isEven = function(num){
//     return (num%2===0);
// }

// const isEven = (num) => {
//     return (num % 2 === 0);
// }
// console.log(isEven(8));

// jab hmara function ek hi parameter le raha hai to ham ye (num) vale brackets hata sakte haii
// const isEven = num => {
//     return (num % 2 === 0);
// }
// console.log(isEven(8));


const isEven = num => (num % 2 === 0);

console.log(isEven(8));

// also agr function bas ek line ka hai to we can remove the braces and return keyword (as arrow signifies return)



// const firstChar = function(anyStr){
//     return anyStr[0];
// }

// const firstChar = (anyStr) => {
//     return anyStr[0];
// }

const firstChar = anyStr => anyStr[0];



console.log(firstChar("Abc"));