// const user1 = {
//     firstName: "Rishika",
//     age: 8,
//     about: function () {
//         console.log(this.firstName, this.age);
//     }
// }

// //dont do this mistake....
// user1.about(); 

// // storing about in some var
// const myFunc = user1.about;
// myFunc();

//o/p should be Rishika 8 
// but it is  undefined undefined

// mtb jo this obj tha uske pass firstName aur age ppty nhi thi

// esa kyu ho rha hai
// To agr hm fxn ko run krne se phle dekh le ki this kis cheez ko rep kr rha haii hme shi idea mil jyega....


const user1 = {
    firstName: "Rishika",
    age: 8,
    about: function () {
        console.log(this);
        console.log(this.firstName, this.age);
    }
}

// const myFunc = user1.about;
// myFunc();

// o/p -->

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// 74.js:30 undefined undefined

// mtb this window  ko represent kr rha haii na ki user1 ko 
// to hua kya abb ki 
// we know ki this ki value hme tab pta lgti hai jab hm aone fxn ko call krte hai
 
// to basically hmne bs myFunc ko about assign krdiya but call nhi kra 


// kuch esa hua


const myFunc = function () {
    console.log(this);
    console.log(this.firstName, this.age);
}
myFunc();

// ab isme to this ki value window hi hogii....
// hmne ye galti kri ki hm bs reference store kar rhe hai
// Binding nhi ho rhi h this koi..

const myFunc2 = user1.about.bind(user1);
myFunc2();

// {firstName: 'Rishika', age: 8, about: ƒ}
// 74.js:30 Rishika 8



