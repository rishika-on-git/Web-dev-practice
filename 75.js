// behaviour of arrow functions .....
// and this..

const user1 = {
    firstName: "Rishika",
    age: 8,
    about:  ()=> {
        console.log(this);
        console.log(this.firstName, this.age);
    }
}

user1.about();
// Arrow fxns ka this nhi hota ... Vo apne surrounding se leta hai

// to o/p will be undefined undefined
// user1 iska this nhi hoga ek level up yani ki window hoga
// aur ise hm chng bhi nhi kr skte call ka use karke ya kisi bhi aur method se

user1.about.call(user1);

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// 75.js:9 undefined undefined

// same o/p