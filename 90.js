// getters and setters
class Person{
    constructor(firstName , lastName , age){
        this.firstName = firstName;
        this.lastName =lastName ;
        this.age  = age; 
    }

     fullName(){
        return` ${this.firstName} ${this.lastName}`
    }
};

const person1 =  new Person("Rishika" , "Aggarwal" , 17);
console.log(person1);
console.log(person1.fullName());// calling the method.
// but we need not call the properties........

// mtb hm fullName jo fxn h use ppty ki trah mtb bina () ke call krna chahte h jese hm firstname , lastName vgera ko krte hai.

console.log(person1.fullName) // ---> Rishika Aggarwal -- ye o/p chahte h hm is statement se.


// iske liye simply get fullName likh do

class Personn{
    constructor(firstName , lastName , age){
        this.firstName = firstName;
        this.lastName =lastName ;
        this.age  = age; 
    }

    get fullName(){
        return` ${this.firstName} ${this.lastName}`
    }


    setName (firstName , lastName){
        this.firstName = firstName;
        this.lastName =lastName ;
    }


    
set fullName(fullName){
    // split spaces se kerege
    const[firstName , lastName] = fullName.split(" ");
    this.firstName = firstName
    this.lastName = lastName
}

};

const person11 =  new Personn("Rishika" , "Aggarwal" , 17);
console.log(person11);
// console.log(person11.fullName()); // will give error
console.log(person11.fullName); // fine 

// obj bnane ke baad hme uska firstName ansd lastNme chng krna hai uske liye hm setters -- setNAme fxn bnayege

person11.setName("Harshit" , "Vashishta");
console.log(person11.fullName);

// ya phir 
// person11.firstName = " ndd ";
// person11.lastName = "kldd  ";

//m chahti hu ki agr m esa likhu ki 
// person11.fullName = "Pinku Aggarwal";
// to firstName aur lastName apne aap chng ho jye.

// for this we can use setter method


// set fullName(fullName){
//     // split spaces se kerege
//     const[firstName , lastName] = fullName.split(" ");
//     this.firstName = firstName
//     this.lastName = lastName
// }


