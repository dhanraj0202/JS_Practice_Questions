const readline = require("readline-sync");

const n = parseInt(readline.question("Enter the value of n: "), 10);

console.log("Table of powers of 2 up to 2^" + n + " (stopping at 256 if exceeded):");

let i = 0;
let power = 1;

while (i <= n && power <= 256) {
    console.log("2^" + i + " = " + power);
    power *= 2;
    i++;
}
