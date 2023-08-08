// block scope vs function scope

// let and const are block scope
// var is function scope

{
    let firstName = "Rishika";
    const lastName = "Aggarwal";
}

console.log(firstName);  // -->Uncaught ReferenceError: firstName is not defined
// esa isliye ho raha haii kyuki ye let haii and let is block scope .. isko hm block ke bhr access
// nhi kar skte haii


{
    let firstName = "Pinku"; // -- since ye block specific haii to same name ka let ham doosri value ke saath define kar skte hai doosre
    // block m -- same for const
    const lastName = "Agg";
}

// console.log(firstName);  
// console.log(lastName);  


// { } , { },... jitne bhi ye blocks hai ye alg hai aur baaki file ka poora ek block hai


// var ke case m access kr skte haii
// js m ye poori hi file main fxn haii to hm khi bhi bnakr khi bhi run kr sakte hai

{

    var hello = "hiii";
}

{
    console.log(hello); // -- can access var even in other { }

}
console.log(hello);


// ese if if for sbke blocks hote haii aur ham nhi chahege ki unke variables bahr access ho jayee... so we use let and const









