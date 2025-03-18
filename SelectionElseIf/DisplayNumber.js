const readline = require("readline-sync");

const num = parseInt(readline.question("Enter a number (1, 10, 100, 1000, ...): "), 10);

if(num === 1){
    console.log("Unit");
}
else if(num === 10){
    console.log("Ten");
}
else if(num === 100){
    console.log("Hundred");
}
else if(num === 1000){
    console.log("Thousand");
}
else if(num === 10000){
    console.log("Ten Thousand");
}
else if(num === 100000){
    console.log("Lakh");
}
else if(num === 1000000){
    console.log("Ten Lakh");
}
else if(num === 10000000){
    console.log("Crore");
}
else if(num === 100000000){
    console.log("Ten Crore");
}
else{
    console.log("Invalid Input! Enter a power of 10 (1, 10, 100, 1000, ...)");
}
