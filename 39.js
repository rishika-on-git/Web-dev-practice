// computed properties

const key1 = "objkey1";
const key2 = "objkey";


const val1 = "myval1";
const val2 = "myval2";

// task is we need this key and value variables created above ki values as keys and values for our object
// like this 
// const obj ={
//     objkey1 : myval1 ,
//     objkey2 : myval2 ,
//  
//  }



// try 1
// const obj ={
//     key1 : val1 ,
//      key2 : val2
//  }

// this wont work as key1 and key2 as it is display hoge bs val1 and val2 ki values aa jyegi

//we need to use [ ] to access the value of keys
// so correct soln will be --->

const obj ={
   [key1] : val1 ,  //[ ] are known as computed properties
    [key2] : val2
}

console.log(obj);


// ANOTHER WAY 

// const obj = {};
// obj[key1] = val1;
// obj[key2] = val2;
// console.log(obj);
