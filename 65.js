//splice method.
//start , delete , insert 

const myArray =["item1" ,"item2"  ,"item3" ,"item4","item5" ];

// delete 
const deletedItem = myArray.splice(1 , 2) // splice(start index , no of elements to delete starting from the start index)
console.log(deletedItem); // also returns the deleetd item
// it changes the original array .....

console.log(myArray);


// insert
myArray.splice(1,0,"inserted item");
//start , delete , insert 

console.log(myArray);

// insert and delete together....
myArray.splice(1 , 2 , "inserted  : Item 1", "inserted  : Item 2");
console.log(myArray);

// it will also return the deleted items ...
// soo..

const deleetdItemm = myArray.splice(1 , 2 , "inserted  : Item 1", "inserted  : Item 2");
console.log(deleetdItemm);



