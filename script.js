const gameOptions = ["Rock", "Paper", "Scissors"];

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
    const userOption = prompt(`1. Rock
2. Paper
3. Scissors
Enter Your Choice: `)
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
// if (userOption === randomGameOption){
//     console.log("You WIN!!");
// }
// else{
//     console.log("You LOSE :(");
// }
let winner;

//  rock > scissors
//  paper > rock
//  scissors > paper

if (userOption == randomGameOption){
    winner = "tie";
} 
else if (userOption == "Rock" && randomGameOption == "Paper"){
    winner = "Computer";
}
else if (userOption == "Paper" && randomGameOption == "Rock"){
    winner = "User";
}
else if (userOption == "Rock" && randomGameOption == "Scissors"){
    winner = "User";
}
else if (userOption == "Scissors" && randomGameOption == "Rock"){
    winner = "Computer";
}
else if (userOption == "Scissors" && randomGameOption == "Paper"){
    winner = "User";
}
else if (userOption == "Paper" && randomGameOption == "Scissors"){
    winner = "Computer";
}
if (winner === "tie"){
    console.log("It's a Tie, play again!");
}
else{
    console.log(winner + " WON!");
}