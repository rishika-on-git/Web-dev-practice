// nested if else

let winningNum = 19;
//let userGuess = prompt("Guess a number");
// takes input in a string format

// so we need to convert it into a number .. add + in front of a string
let userGuess = +prompt("Guess a number");


console.log(userGuess , typeof userGuess);


if(userGuess === winningNum){
    console.log("Your guess is right");
}else{
    if(userGuess < winningNum){
        console.log("too low");

    }else{
        console.log("too high");

    }
}