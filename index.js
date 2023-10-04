


const textBox = document.querySelector('.text-box');

let score = 0;

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
        const p = document.createElement('p')
        p.innerText = "No Point";
        textBox.appendChild(p);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        score++
        const p = document.createElement('p')
        p.innerText = "Yay You got a point!";
        textBox.appendChild(p);
    };
};
            
    
//function keepScore() {
//    let result = playRound();
//    console.log(result);
//    if (result == "Yay You got a point!") {
//        score++
//    } else {
//        return "Try Again"
//    };
//    console.log(score);
//};

function onWin() {
    if (score >= 3) {
    console.log("You win!")
    const h2 = document.createElement('h2')
        h2.innerText = "Best 3 of 5, You win!!";
        textBox.appendChild(h2);
};
}


//function game() {

//for (let i = 0; i < 5; i++) {


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', () => {

const playerSelection = button.id;
const computerSelection = getComputerChoice(); 

    console.log(playerSelection);
    console.log(computerSelection);

playRound(playerSelection, computerSelection);

//keepScore();
    console.log(score);

onWin();

const para = document.createElement('h3');
para.textContent = score;
para.style.color = 'blue';
textBox.appendChild(para);

})
});




//};
//};



//game();





