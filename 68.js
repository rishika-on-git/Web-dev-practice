// MAPS

// map is an iterable

// store data in ordered fashion
// stores key value pair (like object)
// duplicate keys are not allowed like objects


// difference between maps and objects

// objects can have only strings or symbol as key 

// in maps you can use anything as key 
// like array , num , string ...



// object literal 
// key --> string (99.9% times ) and symbol

const person = {
    firstName : "harshit",
    age : 7,
    1 : "one" // here 1 is also a string
};

console.log(person);
console.log(person.firstName);
console.log(person["firstName"]);

console.log(person["1"]);
console.log(person['1']);
console.log(person[1]);
// console.log(person.1); --> invalid 


for(let key in person){
    console.log( typeof key);  // 1 is string -->proved
}

// key value pair 

//Creating a MAP

const personn = new Map();

// adding key value pairs
// key can be of any type...
personn .set("firstName" , "Harshit");
personn .set("age" , 7);
personn .set(1 , "onee");
personn .set([1,6,7.9] , "arrayyyy");

console.log(personn);

// Accessing the key value pairs...
// it has a get method
console.log(personn.get(1));
console.log(personn.get("firstName"));
console.log(personn.keys());

// or 
for(let key of personn.keys()){
    console.log(key , " : " ,typeof key);
}


for(let key of personn){
    console.log(key , typeof key);
}

// now since its type is obj and for of loop is working just like an array it is probably an array ... so check..
for(let key of personn){
    console.log(Array.isArray(key));
}
// true

// now destructuring .. as we did in array

for(let [key , value] of personn){
    console.log(key , value);
}

// we can directly pass array as key value pairs

const perr = new Map ([["firstName" , "harshit"] , ["age" , 17]]);
console.log(perr);

// we have an object jisme hme kuch additional cheezein add krni hh but uske liye apko object nhi use krna map use krna hh

const person1 ={
    id :1,
    firstName : "Rishika"
}
// hm ek new map create krege jisme key is object ko set krege and then key value pairs add kr dege
const userInfo = new Map();
userInfo.set(person1 , {age : 8 , gender : "male"});
console.log(userInfo);

// object => object mtb object ki mapping obj ke saath ho rkhi hhh ..
// person1 jo obj h vo key haii aur jo abhi doosra obj addkra vo value h
//
// {Object => Object}
// key :  {id: 1, firstName: 'Rishika'}
// value: {age: 8, gender: 'male'}

console.log(person1.id);
console.log(userInfo.get(person1));// key ke corr value..
console.log(userInfo.get(person1).age);















