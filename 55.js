// function returning function 


// function myFunc(){
//     // return "bjvha"; // returning a string 
//     // return -1; // returning a value
//     return {name: "harshit"}; // returning a object
//     // return [1, 5 ,7 ,9]; // returning a array
    
// }
// const ans = myFunc();
// console.log(ans);


// returning  a function from a fxn

function myFunc(){
    function hello(){
        console.log("hello");

    }

    return hello;
}

const ans = myFunc();  // ans m hello fxn aa gya
ans(); // this is hello fxn

console.log(ans); // ans m hello fxn aa gya
// if hello fxn is returning a statememnt to print krana pdega alg se
