// map method


// it is like for each ... it will take callback fxn as an argument
// call back fxn bhr bhi ho skta h ya andr bhi jese phle kra tha

const numbers =[3 , 5 ,6 ,7 ,8 ,2];
// const square = function(num){
//     return num*num ;
// }

// numbers.map(square);
// // blank screen no o/p uptill now
// // map fxn n phle 3 pass kra aur square fxn n 9 return kra

// // map fxn hmesha ek naya array bnayega jo return hoga
// // so we can store the array


// const squareNumber = numbers.map(square);

// // printing the array returned by map
// for(let value of squareNumber){
//     console.log(value);
// }

// // or 
// console.log(squareNumber);

// now agr hmne apne fxn m hi return ki jga console.log kra diya hota to ye hota

// const square = function(num){
//    console.log(num*num) ;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// // this will be the o/p...isme numbers to print ho jayege but array m kuch retuen nhi hua to by default undefined return hota haii
// // so it is crucial whenever u use map return the value instead of printing
// // 9
// // 25
// // 36
// // 49
// // 64
// // 4
// // 
// // (6) [undefined, undefined, undefined, undefined, undefined, undefined]



// ab fxn hi yhi pr bna skte haii

// const squareNumber = numbers.map(function(num){
//     return (num*num);
// });
// console.log(squareNumber);

// arrow fxn defn  
// can also use other parameters
const squareNumber = numbers.map((num , index)=>{
    return `index : ${index} , ${num*num}`;
});
console.log(squareNumber);


// Practical example....


const users = [
    {firstName : "harshit", age : 18},
    {firstName : "harsh",  age : 18 },
   { firstName : "harshita", age : 18},
    {firstName : "hari", age : 18},
   { firstName : "herrr", age : 18}
]

const userNames  = users.map((user)=>{
    return user.firstName;
})

console.log(userNames);









