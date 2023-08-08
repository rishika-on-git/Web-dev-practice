
// const UserMethods = {
//     about: function () {

//         return `${this.firstName} is ${this.age} years old`;
//     },

//     is18: function () {
//         return this.age >= 18;
//     }
// }

// function createUser(firstName, lastName, email, age, address) {
//     const user = Object.create(UserMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;


//     return user;
// }

// const user3 = createUser("Pinku", "Aggarwal", "pinki123@gmail.com", 16, "Up");
// const user4 = createUser("Aryan", "Satyam", "aryan123@gmail.com", 20, "Delhi ");
// console.log(user3);
//  console.log(user4.about());


// Hmare pass 2 fxn the userMethods aur createUser .. hm log ek relationship create kr rhe the in dono k beech ..
// js ye krti thi ki jo use createUser m nhi milta tha vo use userMethods m dekhti thi ..
// Object.create ki mdd se hmne esa kra tha kyuki ye proto ppty ko set krdeta tha createUser ki UserMethods...
// Ab sochne vli baat ye h ki hmne khud ka userMethod bnaya fxn ...
// Aur abhi hmne pdha ki jb bhi hm fxn create krte h hme ke muft ki jga milti h prototype .. aur us prototype m hm fxn se related key value pair add kr skte haii..
//Mtb hmne jb createUser fxn bnaya uske saath bhi hme prototype mila..
console.log(createUser.prototype);  // ---> yes mili haii..

// to alg se UserMethods banane se acha hm prototype use kr skte haii..

// so this will be our prototype.. 

createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
};

createUser.prototype.is18 = function () {
    return this.age >= 18;
}

createUser.prototype.sing = function () {
    return "lalalala lalal oooo nanaa na";
}

// Also change Object.create(UserMethods) to createUser.prototype

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;


    return user;
}

const user3 = createUser("Pinku", "Aggarwal", "pinki123@gmail.com", 16, "Up");
const user4 = createUser("Aryan", "Satyam", "aryan123@gmail.com", 20, "Delhi ");
console.log(user3);
console.log(user4.about());
console.log(user4.about());
console.log(user4.is18());





