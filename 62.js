
//every method

const numbers = [2, 4, 6, 8, 10];
console.log(numbers.every((num) => (num % 2 == 0)));

// it return true or false..
//will return true only if the condn satisfies for all the elements of array..


const userCart = [

    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 96000 },
    { productId: 3, productName: "tab", price: 7000 },
]


// checking if each product has price below a given rate
const ans = userCart.every((cartItem) => (cartItem.price < 10000));
console.log(ans);

