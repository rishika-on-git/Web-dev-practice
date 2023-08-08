
// for in  loop --in array

const fruits = ["apple ", "mango " , "litchi " , "guava" , "cherry"];
const fruits2 =[];

for(let index in fruits){
    console.log(fruits[index]);
    // console.log(index);
   fruits2.push(fruits[index].toUpperCase());
    
}

console.log(fruits2);