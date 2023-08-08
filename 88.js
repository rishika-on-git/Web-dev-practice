
// SUPER CLASS


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


class Cat extends Animal{
   constructor(name,age ,speed){
    super(name,age); // Animal class which is also the parent class is super class in js ..
    // we are basically assigning the properties of name and age thru the super class itself.
     this.speed =speed;
   }

   run(){
    return`${this.name} is running at ${this.speed} mph`;
   }
};

const cat1 = new Cat("Jerry" , 1 ,10);
console.log(cat1);
console.log(cat1.run());

