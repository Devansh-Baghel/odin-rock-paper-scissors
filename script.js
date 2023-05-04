const displayInfo = document.querySelector(".display-info");
const userPointsDisplay = document.querySelector(".user-points");
const computerPointsDisplay = document.querySelector(".computer-points");
const gameOptions = document.querySelectorAll(".button");
let userPoints = 0;
let computerPoints = 0;
let winner;


let getComputerChoice = () => {
    let randomOption = Math.floor(Math.random() * 3);
    switch (randomOption){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

function playGame(userChoice, computerChoice) {
    console.log(`You have Chosen ${userChoice}`);
    console.log(`Computer has Chosen ${computerChoice}`);
    if(userChoice == computerChoice){
        winner = "tie";
    }
    else if(userChoice == "rock" && computerChoice == "scissors"
    || userChoice == "paper" && computerChoice == "rock"
    || userChoice == "scissors" && computerChoice == "paper"){
        winner = "You";
        userPoints += 1;
    }
    else{
        winner = "Computer";
        computerPoints += 1;
    }

    if(winner != "tie"){
        displayInfo.innerText = `${winner} won!`
        console.log(winner + " won!");
    }
    else {
        displayInfo.innerText = "It's a Tie"
        console.log("It's a Tie");
    }
    computerPointsDisplay.innerText = computerPoints;
    userPointsDisplay.innerText = userPoints;

}

gameOptions.forEach((gameOption) => {
    gameOption.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        const userChoice = gameOption.id;
        playGame(userChoice, computerChoice);
    });
})
