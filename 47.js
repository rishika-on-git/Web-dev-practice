// hoisting


hello();

function hello(){
    console.log("hello");
}

// in js we can call a function above its declaration but not in case of function expression

//Uncaught ReferenceError: Cannot access 'hello' before initialization in function expression
// kyuki var ko banane se phle access nhi kar payege  na hum
// if var is declared const or let so uncaught reference error ayega aur agr var se declared hai to undefined ayega o/p

// hello();
// const hello = function(){
//     console.log("hello");
// }







