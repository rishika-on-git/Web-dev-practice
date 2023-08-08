function hello(){
    console.log("hello world");
}

hello();

// js --> fxns object bhi haii
// isme hmm fxns ko object ki trah bhi treat kr skte haii
// fxn is combo of fxn and object

console.log(hello.name);
// ab ye esa nu lgra ki jese hm kisi object ko dot se access kr rhe ho jbki name to ek fxn haii 


// you can add your own pptys in fxn pretty much like we add key value pairs in objects..

hello.myOwnProp = "very unique value";
console.log(hello.myOwnProp);

// function being treated like object..........

// fxn provides more useful properties alsoo..

// fxn hme dete hai free space ...free space mtb empty object{}..
// free space is object .. which is known as prototype.

console.log(hello.prototype); //{}
// o/p 
// {constructor: ƒ}
//  constructor: ƒ hello()
// [[Prototype]]: Object

// isme ek hi ppty hai constructor..isme ek hi ppty hai constructor jo ki kya h ek fxn .. and constructor ki value bhi fxn h

// basically agr fxn m koi key value pair add krna hai to we can do it thru the prototype..


// only fxns provide prototype property..

if(hello.prototype){
    console.log("prototype present")
}else{
    console.log("prototype absent")

}

const hii = ["value"];
if(hii.prototype){
    console.log("prototype present")
}else{
    console.log("prototype absent")

}


hello.prototype.abc ="abc";
hello.prototype.xyz ="xyz";
hello.prototype.sing = function(){
    return "lalalallala";
}

console.log(hello.prototype.sing());
console.log(hello.prototype);
console.log(hello);

// fxn ke saath hme prototype free milta haii jise hm use kr skte haii ...
// ab is khali obj (prototype) m kuch bhi add remove kar skte haii..

//__proto__ (optional chaining vala ) and this prototype are completely different
// we can link them though...
