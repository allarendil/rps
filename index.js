
let score = 0;

const textBox = document.querySelector('.text-box');

//for (let i = 0; i < 5; i++) {

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(event) {
       
        function game() {
            const playerSelection = button.id;
            const computerSelection = getComputerChoice();

            console.log(playerSelection);
            console.log(computerSelection);

            playRound(playerSelection, computerSelection);

            function getComputerChoice() {
                function random(arr) {
                    return arr[Math.floor(Math.random() * arr.length)]
                };
                let rpsArray = ["rock", "paper", "scissors"];
                return random(rpsArray);
            };

            function playRound(playerSelection, computerSelection) {
                if (playerSelection === computerSelection) {
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

            keepScore();
            console.log(score);
    
            onWin();

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
        };

        game();

        

    
})
});

const para = document.createElement('h3');
para.textContent = score;
para.style.color = 'blue';
textBox.appendChild(para);

//};

