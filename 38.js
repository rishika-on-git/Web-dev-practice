// how to iterate an object

const person = {
    name: "Harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

};

// for in loop
// object.keys

for(let key in person){
    console.log(key , person[key]);  // person.key -- will return undefined as vo key as a key dhundega jese name , age keys haii ...
   
   
    //console.log(`${key}  :  ${person[key]}`); 

}
// will return the keys of object in form of an array -- so array.isarray will return true
console.log(Object.keys(person));
console.log(typeof (Object.keys(person)));

const val = Array.isArray(Object.keys(person));
console.log(val); // returns true


// for of loop

for (let key of Object.keys(person)){
    //console.log(person[key]);
    console.log(key);
}