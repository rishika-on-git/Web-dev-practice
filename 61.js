// find method ......

const myArray = ["Hello" , "cat" , "dog" ,"lion"];

function isLength3(str){
    return str.length ===3;
}

const ans = isLength3("dog");
console.log(ans);


console.log (myArray.find(isLength3)); // it will return only the first occurence which satisfies the condition...
// so cat ans ayega dog nhii...

const users=[
    {userId :1 , userName : "harshit"},
    {userId :2 , userName : "harsh"},
    {userId :3 , userName : "hari"},
    {userId :4 , userName : "aadityaa"},
    {userId :5 , userName : "rishii"},
];

const myUser = users.find((user)=>{return user.userId === 3});
console.log(myUser);
