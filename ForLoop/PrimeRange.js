const readline = require("readline-sync");

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const start = parseInt(readline.question("Enter the start of the range: "), 10);
const end = parseInt(readline.question("Enter the end of the range: "), 10);


console.log("Prime numbers in the range " + start + " to " + end + " are:");

for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}
