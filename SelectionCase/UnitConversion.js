const readline = require("readline-sync");

console.log("Choose a conversion option:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

const choice = parseInt(readline.question("Enter your choice (1-4): "), 10);

const value = parseFloat(readline.question("Enter the value to convert: "));

let result;

switch(choice){
    case 1:
        result = value * 12;
        console.log(value + " Feet = " + result + " Inches");
        break;
    case 2:
        result = value * 0.3048;
        console.log(value + " Feet = " + result.toFixed(4) + " Meters");
        break;
    case 3:
        result = value / 12;
        console.log(value + " Inches = " + result.toFixed(4) + " Feet");
        break;
    case 4:
        result = value * 3.28084;
        console.log(value + " Meters = " + result.toFixed(4) + " Feet");
        break;
    default:
        console.log("Invalid choice! Please select 1, 2, 3, or 4.");
}

