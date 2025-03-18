const readline = require("readline-sync");

const num = parseInt(readline.question("Enter a number: "), 10);

if(num < 2){
    console.log("Please enter a valid number greater than or equal to 2.");
}
else{
    let isPrime = true;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(num + " is a prime number.");
    }
    else{
        console.log(num + " is not a prime number.");
    }
}
