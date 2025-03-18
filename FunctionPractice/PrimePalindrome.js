const readline = require("readline-sync");

function isPrime(num){
    if (num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function getPalindrome(num){
    return parseInt(num.toString().split("").reverse().join(""), 10);
}

const num = parseInt(readline.question("Enter a number: "), 10);


if(isPrime(num)){
    console.log(num + " is a Prime Number.");

    const palindrome = getPalindrome(num);
    console.log("The palindrome of " + num + " is " + palindrome);

    if(isPrime(palindrome)){
        console.log("The palindrome " + palindrome + " is also a Prime Number.");
    }
    else{
        console.log("The palindrome " + palindrome + " is NOT a Prime Number.");
    }
}
else{
    console.log(num + " is NOT a Prime Number.");
}
