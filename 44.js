//FUNCTIONS

// function declaration


function singHappyBirthday() {
    console.log("happyyyyyyyyyyy birthdayyy to youu ....................");

}

singHappyBirthday();

// function twoPlusFour(){
//     console.log(2+4);
// }
// twoPlusFour();


function twoPlusFour() {
    return 2 + 4;
}
const returnValue = twoPlusFour();
console.log(returnValue);


// function to sum two numbers

function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}

const returnValuee = sumTwoNumbers(9, 7);
// if we will not pass any no it will return NaN -------- not a number
console.log(undefined + undefined); // -- is NaN (as num1 = num2 = undefined in this case of no parameter passing)
console.log(returnValuee);


// is even or odd 

function isEven(num) {
    if (num % 2 === 0) {
        return true;    // or return (num%2===0);
    } else {
        return false;
    }
}

console.log(isEven(9));


// function
// input -- string 
// output -- first char

function firstChar(anyStr) {
    return anyStr[0];

}

console.log(firstChar("Abc"));

// function
// input -- array  , target -- number
// output  -- index of target if it is present in the array

function targetArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }else{
            return -1;
        }

    }
}

const arr = [10, 7, 9, 6, 5];
console.log(targetArray(arr, 8));









