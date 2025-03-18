const readline = require("readline-sync");

function isPalindrome(num){
    let original = num.toString();
    let reversed = original.split("").reverse().join("");
    return original === reversed;
}

const num1 = parseInt(readline.question("Enter the first number: "), 10);
const num2 = parseInt(readline.question("Enter the second number: "), 10);

console.log(num1 + " is " + (isPalindrome(num1) ? "a Palindrome" : "not a Palindrome"));
console.log(num2 + " is " + (isPalindrome(num2) ? "a Palindrome" : "not a Palindrome"));
