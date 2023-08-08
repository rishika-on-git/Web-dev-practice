// nested destructuring 
const users =[
    {userId : 1 , firstName:"Rishika" , gender : "female"},
    {userId : 2 , firstName:"Pinku" , gender : "male"},
    {userId : 3 , firstName:"Atharv" , gender : "male"},
    
 ];

 const [user1 , user2 , user3] = users ;

console.log(user1); 
console.log(user2); 
console.log(user3); 

// ab hme user1 ka firstName chahiye aur user3 ka gender
// user 1 and user3 are objects
// objects se destructuring ke liye {} ka use krege

const[{firstName} ,  , {gender}]= users;

console.log(firstName);
console.log(gender);


// ab in var ka naam change karna haii
// user1 ki 2 values li ek saath
const[{firstName : user1FirstName , userId} ,  , {gender: user3Gender}]= users;
console.log(user1FirstName);
console.log(userId);

console.log(user3Gender);
