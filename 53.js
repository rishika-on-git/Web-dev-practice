// parameter destructuring

// object 
// in react

const person = {
    firstName: "Rishika",
    gender: "female"
};

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     // console.log(obj.age); // since this age parameter is not present in obj it will return undefined
// }

printDetails(person);
// Now jese hi obj ayega isme hme ise destructure karna haii
// mtb agr hme pata hai ki is fxn m obj aane vala hai to ise hm yhi par destructure kar skte haii

function printDetails({firstName , gender , age}) {
    console.log(firstName);
    console.log(gender);
     console.log(age); // since this age parameter is not present in obj it will return undefined
}

// to isse is fxn ki local memory ke andr 3 var bn jyege -->> firstName , gender and  age aur unko phir directly print kar skte hai hm hme obj. likhne ki zroort nhi h







