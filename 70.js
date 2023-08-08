// optional chaining

const user ={
    firstName : "harshit",
    address : {houseNumber : "1234"}
}

console.log(user.firstName);
console.log(user.address); // address khud ek object h .. address key ki value bhi ek obj hai
console.log(user.address.houseNumber);

// now kyi baar hmare saath esa hota hai ki hme pta nhi hota ki ek key value hmare obj m exist krti h ya nhi ... kya pta 2 sec baad hi kr jaaye ..
// to agr hm phir print krate h ppty ko jb vo exist nhi krti to error aata hh jo hme nhi chahiye... hm chahte h ki agr ppty exist nhi kre to ye undefined return krde na ki error.

const user_new ={
    firstName : "harshitt",
    //address : {houseNumber : "1234"}
}

console.log(user_new.firstName);
console.log(user_new.address); 
// output--> undefined 


// console.log(user_new.address.houseNumber);
//  output -->  Uncaught TypeError: Cannot read properties of undefined (reading 'houseNumber')

// optional chaining
console.log(user_new?.firstName); //?. isko ese read krege ki kya user (obj) exist krta haii khi vo undefined ya null to nhi h agr exist krta haii tbhi muje uska firstname return kare nhi to undefined return ho jyega

// eg ..
let userr ;
console.log(userr?.firstName); // undefined ayega kyuki userr is undefined

console.log(user_new?.address?.houseNumber); // undefined aya
// kyuki user_new exist krta tha but jb address hi exist nhi kr rha  h to vo aage check hi nhi krega  uski ppty ke liye..



