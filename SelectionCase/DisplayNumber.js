const readline = require("readline-sync");

const num = parseInt(readline.question("Enter a number (1, 10, 100, 1000, ...): "), 10);

switch(num){
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("Lakh");
        break;
    case 1000000:
        console.log("Ten Lakh");
        break;
    case 10000000:
        console.log("Crore");
        break;
    case 100000000:
        console.log("Ten Crore");
        break;
    default:
        console.log("Invalid Input! Enter a power of 10 (1, 10, 100, 1000, ...)");
}