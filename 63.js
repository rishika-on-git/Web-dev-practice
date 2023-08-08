// some method
const numbers = [2,4,6 ,3, 10];

// checks if atleast one of the element satisfies the condition..

console.log(numbers.some((num)=>(num%2!==0)));



const userCart = [

    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 96000 },
    { productId: 3, productName: "tab", price: 7000 },


]




// suppose we need to do this ...
// check krege ki kya ek bhi item h hmare cart m jiski price 100000 se upr jaa rhi hoo
const ans = userCart.some((cartItem)=>(cartItem.price>100000));
console.log(ans);

