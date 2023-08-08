//static methods and properties

class Personn {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static classInfo(){
        console.log("This is person class");
    }


    static desc = "static property";

    get fullName() {
        return ` ${this.firstName} ${this.lastName}`
    }

    set fullName(fullName) {
        // split spaces se kerege
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName
        this.lastName = lastName
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




};

// static methods cannot be called by object of class..

// only class can call it directly

Personn.classInfo();
console.log(Personn.desc);
