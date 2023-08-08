// sort method

// ASCII VALUE
// char : ascii value

// const numbers = [5, 9, 1201, 410, 3000];
// numbers.sort();
// console.log(numbers);

// sort method does the change in original array
// whereas filter , foreach , map methods do not change the orig array they return a new arrayy...

// expected o/p
//  5 , 9 , 410 , 1201 , 3000

// whereas we get the o/p as   (5) [1200, 3000, 400, 5, 9]

// it is coz js  isko numbers smj k sort nhi kr rha ye isko string smj ke kr rha haii... acc to the ascii values..
// it is interpreting it as 
// numbers = ["5" , "9", "1200", "400", "3000"];

// so js n hr char ka ascii code dekha to 1 ki ascii value in sb m se sbse km haii then 3 ki then 4 ki then 5 and 9...

const userNames = ["harshit", "abcd", "mohit", "nitish", "Harshita", "Rishika"];
userNames.sort();
console.log(userNames);

// strings ko lexicographical order m krta h sort ...
// phle capital vle ayeege then small vale

// o/p --- ['Harshita', 'Rishika', 'abcd', 'harshit', 'mohit', 'nitish']


// now to solve the numbers vli pbm upr vli ....

// sort method argument m ek callback fxn bhi le skta hh

const numbers = [5, 9, 1201, 410, 3000];
numbers.sort((a, b) => {
    return a - b;
});

// numbers.sort((a,b)=>a-b);

console.log(numbers);

// getting the o/p we needed

// sort method basically kya kr rha hh...ki 
// it is checking a-b .. if its value is >0 then a,b ki posn array m swap krdi and agr a-b<0 then keep their posn as it is

// 1200 , 410 
// a-b ---> 790 >0 --> positive
// so swap .. (410 , 1200) 

// 5 , 9
// a-b ---> -4 < 0 --> negative
// so dont swap .. (5,9)

// this is how it is sorted..

// To sort in descending order ... use (b-a) 


numbers.sort((a, b) => {
    return b - a;
});
console.log("sorting in descending algo..");
console.log(numbers);

// price highToLow or LowtoHigh ... as we do in many online shopping sites..

const products = [
    { productId: 1, productName: "P1", price: 300 },
    { productId: 2, productName: "P2", price: 3000 },
    { productId: 3, productName: "P3", price: 200 },
    { productId: 4, productName: "P4", price: 8000 },
    { productId: 5, productName: "P5", price:  500},

]

// low to high

// products.sort((a,b)=>{
//     return a.price - b.price;
// })

// console.log(products);
// but hm esa nhi chate ki vo poore array m chng krde
// to hm clone kr skte h using various methods...

const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
});
console.log(lowToHigh);



const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
});
console.log(highToLow);






