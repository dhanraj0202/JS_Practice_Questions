const readline = require("readline-sync");

function primeFactors(n){
    if(n < 2){
        console.log("Please enter a number greater than 1.");
        return;
    }

    console.log("Prime factors of", n, "are:");

    for(let i = 2; n % 2 === 0; n = n / 2){
        console.log(i);
    }

    for(let i = 3; i * i <= n; i += 2){
        for(; n % i === 0; n = n / i){
            console.log(i);
        }
    }

    if(n > 2){
        console.log(n);
    }
}

const num = parseInt(readline.question("Enter a number: "), 10);

primeFactors(num);