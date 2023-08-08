// function expression
// var m function store hota haii


// function singHappyBirthday() {
//     console.log("happyyyyyyyyyyy birthdayyy to youu ....................");

// } 

//its expression is given below .. both will work exactly same

const singHappyBirthday = function(){
    console.log("happyyyyyyyyyyy birthdayyy to youu ....................");

}

// function to sum three numbers

// function sumTwoNumbers(num1, num2 , num3) {
//     return num1 + num2+num3;
// }

const sumThreeNumbers = function(num1, num2 , num3){
    return num1 + num2+num3;

}

console.log(sumThreeNumbers(3 , 7 ,9));

// is even or odd 

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;    // or return (num%2===0);
//     } else {
//         return false;
//     }
// }


const isEven = function(num){
    return (num%2===0);
}

console.log(isEven(8));

// function firstChar(anyStr) {
//     return anyStr[0];

// }

const firstChar = function(anyStr){
    return anyStr[0];
}

console.log(firstChar("Abc"));