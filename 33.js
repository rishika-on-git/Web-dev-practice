
// for of loop in array

const fruits = ["apple ", "mango " , "litchi " , "guava" , "cherry"];
const fruits2 =[];

for(let value of fruits){
    console.log(value.toUpperCase());
    //console.log(value);
    fruits2.push(value.toUpperCase());
    
}

console.log(fruits2);