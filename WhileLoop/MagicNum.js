const readline = require("readline-sync");

console.log("Think of a number between 1 and 100, and I'll guess it!");

let low = 1, high = 100;
let magicNumber = -1;

while(low <= high){
    let mid = Math.floor((low + high) / 2);
    let response = readline.question("Is your number " + mid + "? (yes/higher/lower): ").toLowerCase();

    if(response === "yes"){
        magicNumber = mid;
        break;
    }
    else if(response === "higher"){
        low = mid + 1;
    }
    else if(response === "lower"){
        high = mid - 1;
    }
    else{
        console.log("Invalid input! Please enter 'yes', 'higher', or 'lower'.");
    }
}

if (magicNumber !== -1) {
    console.log("Your magic number is: " + magicNumber);
} else {
    console.log("Something went wrong. Please try again.");
}