// default parameters

// function addTwo(a , b){
//     return a+b;
// }

// const ans = addTwo(4);
// console.log(ans); // -- o/p will be NaN when a / b is undefined ... but agar hme esa nhi chahiye so we can set default value


// function addTwo(a , b){

//     if(typeof b === "undefined"){
//         b= 1; // (say)
//     }
//     return a+b;
// }
// const ans = addTwo(4);
// console.log(ans);


// best way to set default values
function addTwo(a , b=0){
    return a+b;
}

const anss = addTwo(4);
console.log(anss);


