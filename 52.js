// rest parameters

// function myFunc(a , b , c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// myFunc(3, 4 , 5 ,6 , 7 ,8 ,9);
// we have only 3 parameters that can hold the arguments so o/p will be

// a is 3
// b is 4
// c is 5
// but hm chahte hai ki saare bche hue elememnts ka array bankar c m chla jaye

// this can be done by rest parameters

function myFunc(a, b, ...c) {  // c is rest parameter
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`); //  
    console.log(`c is `, c); // printing in array form
}

myFunc(3, 4, 5, 6, 7, 8, 9);

// create a function that returns the sum of all the numbers passed to it
// we should be able to pass any no of parameters

function addAll(...numbers) {  // it will be an array (numbers)
    console.log(numbers);
    console.log(Array.isArray(numbers)); // -- true
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}

console.log(addAll(3, 6, 7, 4, 5, 6, 7));



























