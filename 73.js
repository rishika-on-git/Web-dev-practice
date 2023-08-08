function hello() {
    console.log("hello world");
}

hello.call();

// .call() is a method to call the fxn 
// in js we have 3 methods ... call apply and bind

const user1 = {
    firstName: "Rishika",
    age: 8,
    about: function () {
        console.log(this.firstName, this.age);
    }
}

user1.about();

const user2 = {
    firstName: "Harshit",
    age: 19,
    // AB hme user1 ka about user2 ke liye use krna haii..
    // We can't copy .. 
}

user1.about.call(); //undefined undefined
user1.about.call(user2); // Harshit 19  ---> output
// mtb user1 ka about hme user2 ke liye call krna haii
// call ke bracket m this pass krege mtb kiske obj ke liye call karna h to usi ke saath binding hogii..

// Ab agr no of parameters diff hote obj m aur fxn m jitne chaiye hote .. to jo nhi hote vo undefined aa jata haii .. ya phir hme use explicitly pass kr skte haii call vle bracket m

const userr1 = {
    firstName: "Rishika",
    age: 8,
    about: function (hobby, favMusician) {
        console.log(this.firstName, this.age, hobby, favMusician);
    }
}

userr1.about.call(user2); //o/p---> Harshit 19 undefined undefined

// passing parameters
userr1.about.call(user2, "guitar", "mozart");




//ABOUT
// now using apply 
// apply internally call ko hi use krta hai

function aboutt(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}


const user11 = {
    firstName: "Rishika",
    age: 8,

}

const user12 = {
    firstName: "Harshit",
    age: 8,

}

aboutt.apply(user11, ["violin" , "hehueheue"]);
aboutt.apply(user12,["flute" , "hjhdide"]);

//BIND RETURNS A FUNCTION

const func = aboutt.bind(user11 , "guitar" , "arjit");
// no o/p
func();
// o/p Rishika 8 guitar arjit



