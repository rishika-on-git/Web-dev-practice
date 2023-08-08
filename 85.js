let numbers = [1,2,3];
// numbers. likte hi itne saare methods aa jate haii..
// ab ye methods to array m h nhi ..
// to ye js ke pass aa kha se rhe haii.
// Ye prototype m aate haii..
// but prototype to sirf ek fxn ka hota hai construtor fxn ka..
// to hmne peeche ese functions bnaye the jo hme object create krke de rhe the.. unhe hm constructor functions khte  haii....

// internally js array create krne ke liye array constructor use krta hai aur use hm new keyword se call krte hai...
// is fxn m array ke prototype m saare methods pade hote haii ..
numbers.prototype
console.log(numbers);
//so..........

let numbersss = new Array(1,6,9,18);
// this syntax is quite big .. the way we create normally basically does the same thing..

// let numbersss =[1,7,8,5,4];
// This syntax involves new internally so we can access all the methods


console.log(Array.prototype); // contains all the methods of array..
console.log(numbersss);

// or simply...

console.log(Object.getPrototypeOf(numbers));




