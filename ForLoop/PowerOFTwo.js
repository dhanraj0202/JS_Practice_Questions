const n = parseInt(process.argv[2], 10);

if(n < 0){
    console.log("Please enter a valid non-negative integer for n.");
}
else{
    console.log("Powers of 2 up to 2^" + n + ":");
    for(let i = 0; i <= n; i++){
        console.log("2^" + i + " = " + Math.pow(2, i));
    }
}
