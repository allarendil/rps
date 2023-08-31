
let score = 0;

function getComputerChoice() {
    function random(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    };

    let rpsArray = ["rock", "paper", "scissors"];

    return random(rpsArray);
}




function game() {

    for (let i = 0; i < 5; i++) {

    const playerSelection = prompt("Rock, Paper, or Scissors?", '');

    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    console.log(computerSelection);
    console.log(playerSelection);

    keepScore();
    console.log(score);

    onWin();

    
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
    
   
    function keepScore() {
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result == "Yay You got a point!") {
        score++
    } else {
        return "Try Again"
    };

    console.log(score);
};

    function onWin() {
if (score >= 3) {
    console.log("You win!")
} else {
    console.log("You Lose ;(")
};

};
    };
};


game();
