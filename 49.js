// lexical scope


// const myVar = "value1";// agar yha par bhi declare hota to myFunc ye print kregga agar myApp m bhi nhi hai myVar

// function myApp() {
//     const myVar = "value1";

//     function myFunc() {
//         //const myVar = "value69"; // -- if this is commented so there is no myVar within the fxn soo  js will search for myVar in lexical scope of the function myFunc

//         // and its lexical scope is myApp as it is defined inside myApp dunction .. so in console.log("inside myFunc" , myVar); -- the myVar will take its
//         // of myApp() declared globally in myFunc

//         console.log("inside myFunc", myVar);

//     }

//     const myFunc2 = function () { }
//     const myFunc3 = () => { }

//     console.log(myVar);
//     myFunc();
// }
// myApp();



// ab dekho 

const myVar = "value89";


function myApp() {
    const myVar = "value100";

    function myFunc() {
       const myVar = "value69";

        console.log("inside myFunc", myVar);

        const myFunc2 = () => {
            console.log("inside myFunc2", myVar);

        }

        myFunc2();


    }


    console.log(myVar);
    myFunc();
}
myApp();


// simple si baat haii agr ek suppose fxn1 doosre fxn2 ke andr declare hai suppose aur use kisi var ki 
//var value print karni hai jo uski defn m nhi h to vo sbsse phle jis fxn ke andr ye vala fxn defined hai mtb (fxn2) us vale function m check krega
// us var ki value ke liye and phir agr usme m bhi nhi hai to jo func2 hai vo jis func3 ke andr hai us vale function
// m jyega value ke liye and agr isme m bhi nhi hua to phir globally declare check krega (after all fxns have finished)