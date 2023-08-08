// this keyword ....

console.log(this);

// o/p
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// SO hme window object mila h return m
// agr hm ek fxn bna ke usme console.log(this) krege and phir call krege fxn ko to vo fxn 
// window obj m add ho jyega...

// this === window
// true


const myFunc = () => 
(console.log("hello world"));

myFunc();

// o/p --> hello world

const myFunc2 = () => 
(console.log(this));

myFunc2();

// o/p --- Window obj ...

// it sometimes create pbm for developers so we write "use strict" in the fxn or at the top so the o/p is always undefined instead of this whole big window obj...



















