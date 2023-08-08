// methods..
// functions inside object is a method


// object 
const person = {
    FirstName: "harshit",
    age: 8,
    about: function () {
        console.log(`Person name is harshit and person age is 8`)
    }
}
person.about();


// o/p
//  ƒ (){
// console.log(`Person name is harshit and person age is 8`)
// }

// now we do not want the firstName and age to be hardcoded in about.. we want js to cal values of these variables from the object itself.
// so we will do it as

const personn = {
    FirstName: "Rishika",
    age: 8,
    about: function () {
        console.log(`Person name is ${this.FirstName}and person age is ${this.age}`);

        console.log(this);
    }
}

personn.about();

//this refers to current object ..

// This can be easily understood from the following eg.
function personInfo() {
    console.log(`Person name is ${this.FirstName} and person age is ${this.age}`);

}

const person1 = {
    FirstName: "harshit",
    age: 8,
    about: personInfo
}
const person2 = {
    FirstName: "Rishika",
    age: 18,
    about: personInfo
}
const person3 = {
    FirstName: "Pinku",
    age: 17,
    about: personInfo
}


person1.about();
person2.about();
person3.about();

// o/p
// Person name is harshit and person age is 8
//  Person name is Rishika and person age is 18
//  Person name is Pinku and person age is 17
