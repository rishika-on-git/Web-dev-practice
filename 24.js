// break 
// continue keyword


console.log("break");
for(let i = 1 ; i<= 10 ; i++){
    if(i==4){
        break;

    }else{
        console.log(i);
    }
}

console.log("continue keyword");
// jese hi i===4 hua continue aagi ke statemnets ko skip kr dega aur loop dubara chlegi i =5 se;

for(let i = 1 ; i<= 10 ; i++){
    if(i===4){
        continue;

    }else{
        console.log(i);
    }
}

console.log("hello there");