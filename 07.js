// methods of string 

// trim()
//toUpperCase()
//toLowerCase()
//slice




// let firstName = "      RIshika    ";
// console.log(firstName.length);
// firstName.trim()
// console.log(firstName);

// o/p will be 
// 17   .
// 17    .. trim k baad to change ho jaani cahhiye thi value but esa nhi hota coz ye existing string k saath work nhi krta .. string is immutable
// firstName.trim()  will return us a new string that has length changed .


// string is immutable 
// so hame new string m trimmed string store krni pdegi 
// ya phir original var m hi store kar skte h



// let firstName = "      RIshika    ";
// console.log(firstName.length);
// console.log(firstName);
// let newString = firstName.trim(); // stored trim value in new variable
// //firstName = firstName.trim();  stores trim value in original value
// console.log(newString);
// console.log(newString.length);


//toUpperCase()

// let namee = "pinku";
// console.log(namee.toUpperCase()); // but isse original str m chng nhi hua
// namee = namee.toUpperCase(); // ab change hoga


//toLowerCase()
//console.log(namee.toLowerCase()); // but isse original str m chng nhi hua



//slice()
// start index // end index

let firstName = "Rishika";

 let newString = firstName.slice(0,5);
 console.log(newString);




