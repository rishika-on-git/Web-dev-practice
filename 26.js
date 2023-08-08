// ARRAYS

// reference type

// how to create arrays
// ordered collection of items or elements

let fruit = ["apple" , "mango" , "grapes"];
console.log(fruit);// printing array elemnts



let numbers = [1 , 6 , 5.6 , 4];
console.log(numbers);// printing array elemnts


// heterogeneous elements in array

let mixed = [1 ,3.7 , "string" , undefined , null, 6 ];
console.log(mixed);


console.log(fruit[2]);
// array is mutable
//changing the elements vaulue
fruit[3] = "litchi";
console.log(fruit);



// VVV IMP

// ARRAY IS A REFERENCE TYPE
// ARRAY IS A OBJECT
// JITNE BHI REFERNECE TYPE HOTE H JS  M UNHE HM OBJECT KHTE HAI


console.log(typeof fruit); // --- object
console.log(Array.isArray(fruit)); // -- ye line hamne likhi takki hm pta kr ske ki hmara object ek array hi haii

let obj = {};
console.log(typeof obj);// -- object
console.log(Array.isArray(obj)); // --- false













