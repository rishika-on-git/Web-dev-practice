// sets(it is iterable) ....
// store data
// sets also have its own methods..
// No - index based access
// Order is not guaranteed..
// Unique items only (no duplicates allowed)

const hello = new Set("abcghii");
console.log(hello);

const numbers = new Set([1, 2, 3, 3, 3]); //  no duplicates allowed .. sirf unique vle lega ye
console.log(numbers);

// No - index based access
console.log(numbers[1]);  // undefined ayega o/p

// Order is not guaranteed. ... . since there is no index based access
// 2 ,1 ,3 bhi ho sakta hai order...


// Empty set 
const numberss = new Set(); //  no duplicates allowed .. sirf unique vle lega ye

// can add any type of elemets it is heterogeneous...

numberss.add(1);
numberss.add(100);
numberss.add("abhhiososidndj");
numberss.add(["item1", "item2"]);
numberss.add(["item1", "item2"]); // This will be added again in set even though it has same elements.. 
//it is coz these arrays are created diffrently and have diff memory locations.. 
//so even though their elements are same they are diff arrays so they will be added to the set ... but an array once declared cannot be added to the set twice ... it will only consider ot once.

const itemsArr = ["val1", "val2", 1, 5, 7.9];
numberss.add(itemsArr);
numberss.add(itemsArr);

console.log(numberss);

// Set methods
// to check whether this element is present in set or not

if (numberss.has(10)) {
    console.log("10 is present");
} else {
    console.log("10 is not present");

}

// printing using for of loop as it is iterable...
for(let num of numberss){
    console.log(num);
}

//..finding unique elements of array
const myArray = [1,2,4,4,5,6,5,6,7];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
console.log(myArray);

// finding length 
let length = 0;
for(let val of uniqueElements){
    length++;
}

console.log(" The length of Set is " , length);





