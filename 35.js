// array destructuring

const myArr = ["value1" , "value2" , "value3" , "value4" , ];
// storing elemnts of array in variables

// let myVar1 = myArr[0];
//  let myVar2 = myArr[1];

//  console.log("value of myVar1  :" , myVar1);
//  console.log("value of myVar2  : " , myVar2);

// // js has a shortcut to do this..

// let [myVar1 , myVar2] =myArr;
// //const [myVar1 , myVar2] =myArr; --- can also be declared const

// console.log("value of myVar1  :" , myVar1);
//  console.log("value of myVar2  : " , myVar2);


 // agr index skip karna haii to

 let [myVar1 , , myVar2] =myArr;

 console.log("value of myVar1  :" , myVar1);
 console.log("value of myVar2  : " , myVar2);

// aur agar hme baaki ki values chahiye ek array me store ho jaye to hm slicing kar skte haii..

let myNewArray = myArr.slice(2);
console.log(myNewArray);

// or using spread operator

//let [myVar1 , , myVar2 , ...myNewArray] =myArr;
// console.log(myNewArray);


