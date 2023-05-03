const gameOptions = ["Rock", "Paper", "Scissors"];
let winner;
let userPoints = 0;
let computerPoints = 0;
function playGame(){
    let getRandomGameOption = () => {
    randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice){
        case 0:
            return gameOptions[0];
            break;
        case 1:
            return gameOptions[1];
            break;
        case 2:
            return gameOptions[2];
            break;
    }
    }
    let getUserOption = () => {
        const userOption = prompt(`        1. Rock
        2. Paper
        3. Scissors
        Enter Your Choice (1-3): `)
        if (isNaN(userOption)){
            alert("Enter a Valid Option (1-3)");
            // getUserOption();
        }
        else if (userOption > 3 || userOption < 1){
            alert("Enter a Valid Option (1-3)");
            // getUserOption();
        }
        else{
            return gameOptions[userOption-1];
        }
    }
    
    const userOption = getUserOption();
    const randomGameOption = getRandomGameOption();
    console.log(`You Have chosen ${userOption}`);
    console.log(`Computer has chosen ${randomGameOption}`);
    
    
    let checkWinner = (userOption, randomGameOption) =>{
        if (userOption == randomGameOption){
            return "tie";
        } 
        else if (userOption == "Rock" && randomGameOption == "Paper"){
            return "Computer";
        }
        else if (userOption == "Paper" && randomGameOption == "Rock"){
            return "User";
        }
        else if (userOption == "Rock" && randomGameOption == "Scissors"){
            return "User";
        }
        else if (userOption == "Scissors" && randomGameOption == "Rock"){
            return "Computer";
        }
        else if (userOption == "Scissors" && randomGameOption == "Paper"){
            return "User";
        }
        else if (userOption == "Paper" && randomGameOption == "Scissors"){
            return "Computer";
        }
    }
    winner = checkWinner(userOption,randomGameOption);
    
    if (winner === "tie"){
        console.log("It's a Tie, play again!");
    }
    else if (winner == "User"){
        userPoints++
        console.log("YOU WIN");
    }
    else if (winner == "Computer"){
        computerPoints++
    }
    console.log(`The current score is YOU: ${userPoints} COMPUTER: ${computerPoints}`);
}

if (userPoints > computerPoints){
    console.log("");
    console.log("You won the game!!!");
    console.log("");
}else if (computerPoints > userPoints){
    console.log("");
    console.log("Computer won the game :(");
    console.log("");
}else{
    console.log("It's a tie!");
}