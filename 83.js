// new keyword..
// this is also known as constructor function
function createUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

// calling fxn using new keyword..
const user1 = new createUser("Rishika", 17);
console.log(user1);
console.log(createUser("Rishika", 17));

// new keyword is doing the following  things
// 1. creating an empty object
// 2.  this refers to empty object... this={}
// 3. empty object m key value pair add krdiya
// 4. return krdega is object ko
// 


createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
};

// new keyword vo relation khud bnadega ki agr js ko kuch user1 m na mile to vo prototype m jakar dekh le
console.log(user1.about()); // -->call hogya


// NEW KEYWORD SE PICHLA KAAM KREGE
// ****************************************************************************************************************************************************
// ****************************************************************************************************************************************************
// ****************************************************************************************************************************************************
// ****************************************************************************************************************************************************

CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
};

CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}

CreateUser.prototype.sing = function () {
    return "lalalala lalal oooo nanaa na";
}

// Also change Object.create(UserMethods) to createUser.prototype

function CreateUser(firstName, lastName, email, age, address) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;

}

const user3 = new CreateUser("Pinku", "Aggarwal", "pinki123@gmail.com", 16, "Up");
const user4 = new CreateUser("Aryan", "Satyam", "aryan123@gmail.com", 20, "Delhi ");
console.log(user3);
console.log(user4.about());
console.log(user4.about());
console.log(user4.is18());


// __proto__ ==== [[Prototype]]
// This is written like this in official ecmascript documentation




for (let key in user3) {
    console.log(key);
}

// //firstName
// lastName
// email
//  age
// address
// about
// is18
// sing


for (let key in user3) {
    if (user3.hasOwnProperty(key)) {
        console.log(key);
    }
}

// sirf khud ki keys print hogi prototype vli nhi hogii..















