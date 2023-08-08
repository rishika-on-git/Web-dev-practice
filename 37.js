// diffrence between dot and bracket notation


// const person = {
//     name: "Harshit",
//     age: 22,
//     hobbies: ["guitar", "sleeping", "listening music"]

// };

// agr hame koi naam key ka two words vala dena haii to "" are necessaryy ...... vese to name age hobbies m bhi lga skte hai np but we dont do it.


const person = {
    name: "Harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

};

console.log(person);
//dot operator
//console.log(person.person hobbies); // will give error as spaces present
console.log(person["person hobbies"]);

// ab agr hme koi key value pair add krni haii object maii jiski key ek variable ki value se ayegii...

const key = "email";
// person.key = "rishika234@gmail.com";
// console.log(person);

// but yha pr key ki value nhi aayi vhi likha aa gya jo hme nhi chahiye
//key ki value variable se chahiye thi

person[key]= "rishika234@gmail.com"; // dont write "key" as usse uski value fetch nhi hogi
console.log(person);
