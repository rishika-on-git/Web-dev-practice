// use const for array
// const pi = 3.14159
// pi = 12; // not valid
// console.log(pi);


const fruits = ["apple" , "banana"];
//fruits = ["grapes" , "guava"]; -- not valid as we are trying to change the address of array.
// uncaught type error -- assignment to constant variable

fruits.push("litchi"); // this is valid as it is not changing the address of array. 

// hme lgta hai ki array  const hai to push kese ho rhi hai koi cheez 
// eg fruits array ka address hai 0X11 
// array is  stored in heap 
// but push se address change nhi kiya haii so no pbm
console.log(fruits);

// const use krna chahiye refrence types ke liye .. as it is quite safe.
// jab bhi koi refrence type bnaugi const use krugi
