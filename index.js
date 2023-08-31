
function getComputerChoice() {
    function random(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    };

    let rpsArray = ["rock", "paper", "scissors"];

    return random(rpsArray);
}

function playRound(playerSelection, computerSelection) {

    let newChoice = playerSelection.toLowerCase();

    if (newChoice === computerSelection) {
        return "Tie! Play Again!";
    } else if (
        (newChoice == "rock" && computerSelection == "paper") ||
        (newChoice == "paper" && computerSelection == "scissors") ||
        (newChoice == "scissors" && computerSelection == "rock")
    ) { return "No Point";
    } else if (
        (newChoice == "rock" && computerSelection == "scissors") ||
        (newChoice == "paper" && computerSelection == "rock") ||
        (newChoice == "scissors" && computerSelection == "paper")
    ) {
        return "Yay You got a point!";
    };
};


function game() {

    let score = 0;

    const playerSelection = prompt("Rock, Paper, or Scissors?", '');

    const computerSelection = getComputerChoice();
    

    for (let i = 0; i < 5; i++) {

    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    console.log(computerSelection);
    console.log(playerSelection);
    
    if (result == "Yay You got a point!") {
        score++
    } else {
        return "Try Again"
    };

   
    console.log(score);
};

    console.log(score);

if (score >= 3) {
    return "You win!"
} else {
    return "You Lose ;("
};

};


game();
