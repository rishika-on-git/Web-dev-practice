const obj1 = {
    key1: "value1",
    key2: "value2",

}

// const obj2 ={
//     key3 : "value3";
// }


// console.log(obj2.key1);
// // undefined aya o/p jo ana bhi chahiye
// // hm ye chahte h ki agr js ko obj2 m key1 na mile to vo khud jaye obj1 ke pass dhundhe ki kya vha to key1 nhi haii agr h to uski value krde print..


// TO HUM KUCH ESA KREGE....
// const obj2 ={};
// there is one more way to create an empty object
const obj2 = Object.create(obj1);
// it will return an empty object
// create does this --> Creates an object that has the specified prototype or that has null prototype.
obj2.key3 = "value3";
obj2.key2 = "unique_value2";

// console.log(obj2); // o/p --> {} --> empty obj2

console.log(obj2.key3);
console.log(obj2.key1); // o/p value1 as js ke pass ref obj1 ka tha to js n khud vha jakar check kra ki khi vha to nhi h key1 ki value..
console.log(obj2.key2); // ab to apni vali hi print hogi

// But esa ho kese raha haii ??

console.log(obj2);
// [[Prototype]]:Object // mtb obj1 jo ki ek obj h vo iska prototype haii........


console.log(obj2.__proto__);

// __proto__ === [[Prototype]]

// kuch bhi likh aa skta hai browser mm
