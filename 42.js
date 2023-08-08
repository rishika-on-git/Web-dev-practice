// objects inside arrays
// very useful in real world application

const users =[
    {userId : 1 , firstName:"Rishika" , gender : "female"},
    {userId : 2 , firstName:"Pinku" , gender : "male"},
    {userId : 3 , firstName:"Atharv" , gender : "male"},
    
 ];

 console.log(users);

 // iterating using for or for of loop 

 for(let user of users){
    console.log(user);
    console.log(user.userId);
    console.log(user.firstName);
    console.log(user.gender);
 }
