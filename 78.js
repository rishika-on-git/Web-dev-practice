// discussing and resolving the issues of prev code..

// function createUser(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;

//     user.about = function () {

//         return `${this.firstName} is ${this.age} years old`;
//     };
//     user.is18 = function () {
//         return this.age >= 18;
//     }

//     return user;
// }


// const user2 = createUser("Rishika" , "Aggarwal" , "rishika123@gmail.com" , 18 ,"Kishtwar , J&k");
// console.log(user2);
// console.log(user2.is18());
// console.log(user2.about());

// const user3 = createUser("Pinku" , "Aggarwal" , "pinki123@gmail.com" , 16 ,"Up");
// const user4 = createUser("Aryan" , "Satyam" , "aryan123@gmail.com" , 20 ,"Delhi ");

// jitni baar user bnege utni hi baar ye methods bnege .. aur jitni baar methods bnege utni hi baar ye memory fill hogi..
// mtb hme ye method to same h hr obj k liye..we need only one copy for thiss.....



const UserMethods ={
    about : function () {

        return `${this.firstName} is ${this.age} years old`;
    },

    is18 : function () {
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = UserMethods.about; // hm reference store kar rhe haii
    user.is18 = UserMethods.is18;
  
    return user;
}

// SO this is our fxn to create and its methods..


const user3 = createUser("Pinku" , "Aggarwal" , "pinki123@gmail.com" , 16 ,"Up");
const user4 = createUser("Aryan" , "Satyam" , "aryan123@gmail.com" , 20 ,"Delhi ");
console.log(user3.about());
console.log(user4.about());

// Memory km utilise ho rahi haii.....

// Ab isme bhi ek pbm hh... 
// next file..


