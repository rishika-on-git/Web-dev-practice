
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

const user3 = createUser("Pinku" , "Aggarwal" , "pinki123@gmail.com" , 16 ,"Up");
const user4 = createUser("Aryan" , "Satyam" , "aryan123@gmail.com" , 20 ,"Delhi ");
console.log(user3.about());
console.log(user4.about());



// Ab isme bhi ek pbm hh...
// ki agr hmne ek method bnaya to hme use dono fxxns m add krna pdega .. that would be quite an tedious task 

// refer file 80 after this and then cm bck

// to ab fxn ese bnayege...

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(UserMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
   
  
    return user;
}

console.log(user3);

console.log(user3.about());
