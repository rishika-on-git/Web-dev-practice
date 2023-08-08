
// iterables ....
// jispe hum for of loop lga sake..
// string , array are iterables...

const firstName = "Harshit";
for(let char of firstName){
    console.log(char);
}

const items = ["item1" , "item2" , "item3"];
for(let item of items){
    console.log(item);
}

//OBJECTS ARE NOT ITERABLE ...

// const users = {"key1" : "value1" , "key2" : "value2"}
// for(let item of users){
//     console.log(item);
// }

// Uncaught TypeError: users is not iterable

// array like object 
// jinke pass length property hoti haii...
// aur  jisko hum uske index se access kr skte haii
// example === string ..

const firstNamee = "RIshika";
console.log(firstNamee[5]);
console.log(firstNamee.length);



