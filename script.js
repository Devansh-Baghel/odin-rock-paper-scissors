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
        getUserOption();
    }
    else if (userOption > 3 || userOption < 1){
        alert("Enter a Valid Option (1-3)");
        getUserOption();
    }
    else{
        return gameOptions[userOption-1];
    }
}

// Get input from user
// getRandomGameOption();
const userOption = getUserOption();
const randomGameOption = getRandomGameOption();
console.log(`You Have chosen ${userOption}`);
console.log(`Computer has chosen ${randomGameOption}`);
if (userOption === randomGameOption){
    console.log("You WIN!!");
}
else{
    console.log("You LOSE :(");
}