
//OOPS IN JS

const user = {
    firstName: "harshit",
    lastName: "Vashistha",
    email: "harshitVasishsht@gmail.com",
    age: 2,
    address: "HouseNumber , Pincode , Colony  , State , Landamrk",
    about: function () {

        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function () {
        return this.age >= 18;
    }
}

const aboutUser = user.about();
console.log(aboutUser);

// Now if we want to create more users it would be quite a tedious task to write the same code again and again and then assign values for different users..
// So we'll create a fxn that takes i/p all the details and return us a corresponding object

// fxn (that function create object)
// 2) Add key value pairs
// 3) object ko return krega

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about = function () {

        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function () {
        return this.age >= 18;
    }

    return user;
}


const user2 = createUser("Rishika" , "Aggarwal" , "rishika123@gmail.com" , 18 ,"Kishtwar , J&k");
console.log(user2);
console.log(user2.is18());
console.log(user2.about());




