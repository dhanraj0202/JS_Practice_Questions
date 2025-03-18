function gamble(){
    let money = 100;
    let goal = 200;
    let bets = 0;
    let wins = 0;

    while(money > 0 && money < goal){
        bets++;
        let betResult = Math.random() < 0.5;
        
        if(betResult){
            money++;
            wins++;
        }
        else{
            money--;
        }
        
        console.log("Bet " + bets + ": " + (betResult ? "Won" : "Lost") + ", Money left: " + money);
    }

    console.log("\nGame Over! Final Money: " + money);
    console.log("Total Bets Placed: " + bets);
    console.log("Total Wins: " + wins);
    console.log(money === goal ? "Gambler reached the goal!" : "No more money to gamble!");
}

gamble();