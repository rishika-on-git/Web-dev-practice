class Animal{
    constructor(name , age){
        this.name= name;
        this.age= age;
    }


    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }
}

const animal1 = new  Animal("Casfer" , 1);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute());


// cat class
// dog class

class Dog{
    constructor(name , age){
        this.name= name;
        this.age= age;
    }


    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }
}


const doggy1 = new Dog("tommy" , 3);
console.log(doggy1);
console.log(doggy1.eat());
console.log(doggy1.isSuperCute());


// for Cat class to inherit animal ....

class Cat extends Animal{};
const cat1 = new Cat("Jerry" , 1);
console.log(cat1);
console.log(cat1.eat());
console.log(cat1.isSuperCute());

