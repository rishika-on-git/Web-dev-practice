// important array methods

// for each
// map
// filter
// reduce


const numbers = [4 , 2 , 5, 8];
// fxn as a in

function multiplyBy2(number , index){
    console.log("index is  " , index);
    console.log(`${number}*2 = ${number*2}`);
}

multiplyBy2(numbers[0] , 0);
// multiplyBy2(numbers[1] , 1);
// multiplyBy2(numbers[2] , 2);
// multiplyBy2(numbers[3] , 3);

// we want to repeat this work so will use for loop instead of writing as we did above

// for(let i = 0 ; i<numbers.length ; i++){
//    multiplyBy2(numbers[i] , i);
// }


numbers.forEach(multiplyBy2) //this works exactly the same as above loop 
// for each method passes the args from numbers to the multiplyBy2 fxn easily... so no hassle

// we pass a callback fxn in for each
// so we can call the fxn 
// callback fxn is fxn in which fxn is passed as an argument

// for each method passes the args as in the given order
// --number , index and array ...
// its our choice we want to use it or not 

numbers.forEach(function( num , ind , arr){
    console.log("index is " , ind );
    console.log("Number is  " , num);
    console.log("Array is  " , arr);
    console.log("");
    

})








// har ek user ka first nm print kro

const users = [
    {firstName : "harshit", age : 18},
    {firstName : "harsh",  age : 18 },
   { firstName : "harshita", age : 18},
    {firstName : "hari", age : 18},
   { firstName : "herrr", age : 18}

]
console.log("using a for  EACH loop");

users.forEach(function(user){   // hmne fxn ki defn hi yhi dedi it has no name it is an anonymous fxn
// obj passed as argument
    console.log(user.firstName);
})

console.log("");


console.log("using a for of loop");
for(let user of users){ // bina for each ke
    console.log(user.firstName);
}


// now defining the  annonymous fxn using arrow fxn method

users.forEach((user , index , obj)=>{  // passing all args // our wish ..not necessary
    console.log(user.firstName , index , obj);
})


