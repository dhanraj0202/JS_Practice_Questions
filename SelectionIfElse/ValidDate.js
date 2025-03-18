const readline = require("readline-sync");

let day = parseInt(readline.question("Enter the day: "));
let month = readline.question("Enter the month: ").toLowerCase();

let isValid = false;

if(day>=20 && month==="march"){
    isValid = true;
}
if(month === "april"){
    isValid = true;
}
if(month === "may"){
    isValid = true;
}
if(day<=20 && month==="june"){
    isValid = true;
}
console.log(isValid)