// creating classes

// function CreateUser(firstName, lastName, email, age, address) {

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;

// }

class CreateUser {
    constructor(firstName, lastName, email, age, address) {

        console.log("constructor called");
        // constructor is called when new keyword is there ..
        // else it wont be called
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() {

        return `${this.firstName} is ${this.age} years old`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return "lalalala lalal oooo nanaa na";

    }
    
    func(a){
        console.log(a)

    }

}
const user1 = new CreateUser("Pinku", "Aggarwal", "pinki123@gmail.com", 16, "Up");
console.log(user1.firstName);
console.log(user1.is18());
console.log(user1.sing());

console.log(Object.getPrototypeOf(user1));
user1.func("Rishika");







