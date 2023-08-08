// reduce method

const numbers = [1, 2, 3, 4, 5, 10];
// my aim : sum of all nos in array ...
// hm bs reduce ko smjne ke liye esa kr rhe hhh

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// // ye documentation m likha hua hh ki in parameters ka naam yhi rkhte hh  by convention

// console.log(sum);


// keeping track of the values
// accumulator , currentValue , return
//   1              2              3        // in ist iteration accumulator ki value hogi ist index p jo value haii aur currentValue ki value hogi 2nd element p jo value haii .. aur return hoga in dono ka sum
//   3              3              6         // in 2nd iter .. return ki value prev vali accumulator ki value bn jyegi...aur currentValue ki value ab jo 3rd element h vo hogi
//   6               4              10 
//   10              5              15  
//   15              10             25

// here we can also set an initial value for the accumulator ...

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100);  // passing initial value along with call back

console.log(sum);
// o/p will be 125 ... as now strt value of accumulator is 100

// keeping track of the values
// accumulator , currentValue , return
//   100              1           101      // everythinhg will remain same .. bs ab curr value phir 1 se hi start hogi mtb first elemet se
//   102              2           103       
//   105              3           106
//   10               4           110  
//   15               5           125




// Practical example........
const userCart = [

    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 96000 },
    { productId: 3, productName: "tab", price: 7000 },
]

const totalAmt = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;

}, 0);
console.log(totalAmt);





