

const textBox = document.querySelector('.text-box');

let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
    };
    let rpsArray = ["rock", "paper", "scissors"];
    return random(rpsArray);
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        const p = document.createElement('p')
        p.innerText = "Tie! Play Again!";
        textBox.appendChild(p);
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) { 
        compScore++
        const p = document.createElement('p')
        p.innerText = "Computer Wins This Round!";
        textBox.appendChild(p);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++
        const p = document.createElement('p')
        p.innerText = "Yay You got a point!";
        textBox.appendChild(p);
    };
};
            
function onWin() {
    if (playerScore >= 5) {
    const h2 = document.createElement('h2')
        h2.innerText = "First to 5, You win!!";
        textBox.appendChild(h2);
} else if (compScore >= 5) {
    const h2 = document.createElement('h2')
        h2.innerText = "Computer is first to 5, You Lose :(";
        textBox.appendChild(h2);
};
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', () => {

const playerSelection = button.id;
const computerSelection = getComputerChoice(); 

playRound(playerSelection, computerSelection);

onWin();

const parap = document.createElement('h3');
parap.textContent = playerScore;
parap.style.color = 'FloralWhite';
textBox.appendChild(parap);

const parac = document.createElement('h3');
parac.textContent = compScore;
parac.style.color = 'SaddleBrown';
textBox.appendChild(parac);

})
});




