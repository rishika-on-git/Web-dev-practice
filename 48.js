// functions inside function

const app = () => {
    const myFunc = () => {
        console.log("inside myFunc ");
    }

    const addTwo = (n1, n2) => {
        return n1 + n2;

    }

    const mul = (n1, n2) => n1 * n2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(3 ,6));
    console.log(mul(17,6));



}

app();