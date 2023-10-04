


const textBox = document.querySelector('.text-box');

let score = 0;

function getComputerChoice() {
    function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
    };
    let rpsArray = ["rock", "paper", "scissors"];
    return random(rpsArray);
};


function game() {

for (let i = 0; i < 5; i++) {


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', function(event) {

//FIGURE OUT HOW TO PULL BUTTON ID AND USE IT FOR PLAYER SLECTION

    return button.id;
})
});

const playerSelection = button.id; // CHANGE THIS ^
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

    console.log(playerSelection);
    console.log(computerSelection);
    console.log(score);

keepScore();
    console.log(score);

onWin();


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie! Play Again!";
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    ) { return "No Point";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Yay You got a point!";
    };
};
            
    
function keepScore() {
    let result = playRound();
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
};
};





const para = document.createElement('h3');
para.textContent = score;
para.style.color = 'blue';
textBox.appendChild(para);

};
};



game();





