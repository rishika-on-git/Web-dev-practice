// spread operator

const arr1 = [1 , 3 ,5 ];
const arr2 = [9,7,4 ];

const newArray = [...arr1 , arr2 , 90 , 67 , ...arr2];
console.log(newArray);

const newArr = [..."abcdefg"]; // strings can also be spread
console.log(newArr);

// const newArr = [...1234567]; // will throw error as numbers arent iterable
// console.log(newArr);

// spread operator in objects 

const obj1 = {
    key1 : "value1",
    //key1 : "value90", --> error ayega coz same keys 2 baar nhi aa skti kisi obj maii
    key2 : "value2"

};

const obj2 = {
    key3: "value3",
    key1 : "value unique",
    
    key4 : "value4"

};

// new obj m obj1 aur obj2 aarhe hh aur dono m key1 haii to konsi key1 ki value ayegi vo depend krega ki konsa baad m spread hua haii..

const newObj = {...obj1 , ...obj2 , key87 : "value69"};

console.log(newObj);

// isme 0 ,1 , 2 , 3 ....keys bn jyegii
// const newNewObjj = {..."abcd"};
// console.log(newNewObjj);

// elements of array spreading
const newNewObjj = {...["aaaa" , "bcddd" , "cefgjsjk"]};
console.log(newNewObjj);












