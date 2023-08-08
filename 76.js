// short syntax

// const user1 = {
//     firstName: "Rishika",
//     age: 8,
//     about: function () {
//         console.log(this);
//         console.log(this.firstName, this.age);
//     }
// }

// same as
const user1 = {
    firstName: "Rishika",
    age: 8,
    about() {
        console.log(this);
        console.log(this.firstName, this.age);
    }
}

