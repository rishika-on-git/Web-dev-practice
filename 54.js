// call back functions
// function myFunc(a) {
//     console.log(a);
//     console.log("hello world");
// }

//  // is func m a kuch bhi ho skta hai array , object , string 

//  myFunc([1, 3 ,5 ,7]); // array
//  myFunc("ASdfghjkl"); // string

//  const person = {
//     firstName : "rishika",
//     age : 18 
//  };

//  myFunc(person); // object


// ab kya "a" ki value ek fxn ho sakti hai ??
// function myFunc2() {
//     console.log("hello from myFunc2");

// }

// myFunc(); // -- undefined as nothing passed
// myFunc(myFunc2()); // o/p with paranthesis

// // hello from myFunc2
// // undefined
// //  hello world


// myFunc(myFunc2); // -- callback function // hmne a m fxn pass krdi 
// // is a ki value poora func2 h
// // to hm ise func m call kar skte haii


// function myFunc2() {
//     console.log("hello from myFunc2");

// }


// function myFunc(callback) {  // call back function 
//     // and since ye call back fxn h to ye convention hai ki yha par hm apne parameter ka naam callback rkhte haii to a ki jga callback krdo
    
//     callback();
// }

// myFunc(myFunc2);


// passing parameters


function myFunc2(name) {
    console.log("hello from myFunc2");
    console.log("your name is " , name);


}


function myFunc(callback) {  // call back function 
    console.log("hello there I am a func ....")
    callback("harshit");
}

myFunc(myFunc2);
























