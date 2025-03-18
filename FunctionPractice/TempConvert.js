const readline = require("readline-sync");

function celsiusToFahrenheit(degC){
    return (degC * 9 / 5) + 32;
}

function fahrenheitToCelsius(degF){
    return (degF - 32) * 5 / 9;
}

console.log("Choose Conversion:");
console.log("1: Celsius to Fahrenheit");
console.log("2: Fahrenheit to Celsius");

const choice = parseInt(readline.question("Enter your choice (1 or 2): "), 10);

switch (choice){
    case 1:
        const degC = parseFloat(readline.question("Enter temperature in Celsius (0 C to 100 C): "));
        if(degC < 0 || degC > 100){
            console.log("Invalid input! Temperature must be between 0 C and 100 C.");
        }
        else{
            console.log(degC + " C is equal to " + celsiusToFahrenheit(degC).toFixed(2) + " F");
        }
        break;

    case 2:
        const degF = parseFloat(readline.question("Enter temperature in Fahrenheit (32 F to 212 F): "));
        if(degF < 32 || degF > 212){
            console.log("Invalid input! Temperature must be between 32 F and 212 F.");
        }
        else{
            console.log(degF + " F is equal to " + fahrenheitToCelsius(degF).toFixed(2) + " C");
        }
        break;

    default:
        console.log("Invalid choice! Please select 1 or 2.");
}