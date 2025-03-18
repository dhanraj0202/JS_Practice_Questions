const readline = require("readline-sync");

let num = parseInt(readline.question("Enter the number: "), 10);
let fact = 1;

for(let i = num; i>0; i--){
    fact*=i;
}
console.log(fact);