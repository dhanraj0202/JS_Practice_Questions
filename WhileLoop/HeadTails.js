function flipCoin(){
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

let headsCount = 0;
let tailsCount = 0;

while(headsCount < 11 && tailsCount < 11){
    let result = flipCoin();
    console.log("Flipped: " + result);
    
    if(result === "Heads"){
        headsCount++;
    }
    else{
        tailsCount++;
    }

    console.log("Score - Heads: " + headsCount + ", Tails: " + tailsCount);
}

console.log("Game Over! " + (headsCount === 11 ? "Heads" : "Tails") + " wins!");
