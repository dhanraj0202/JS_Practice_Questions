const n = parseInt(process.argv[2], 10);

if(n <= 0){
    console.log("Please enter a valid positive integer for n.");
}
else{
    let harmonicNumber = 0;
    
    for(let i = 1; i <= n; i++){
        harmonicNumber += 1 / i;
    }
    
    console.log("The " + n + "th harmonic number is: " + harmonicNumber.toFixed(6));
}