const choices = ['Rock', 'Paper', 'Scissors'];

let playerPts = 0;
let computerPts = 0;

const tryAgain = " Refresh to try again!";

const textDiv = document.querySelector('div.scoretext');
const resultDiv = document.querySelector('div.resulttext');
const winnerDiv = document.querySelector('div.winnertext');

const playerScore = document.createElement('p');
const computerScore = document.createElement('p');

const matchText = document.createElement('p');
const roundResultText = document.createElement('p');

const winnerText = document.createElement('p');

playerScore.textContent = "Player: " + playerPts;
computerScore.textContent = "Computer: " + computerPts;

roundResultText.textContent = "Click any button!"

winnerText.textContent = "First to 5 wins the game!";

function computerPlay () {
    return choices[Math.floor(Math.random() * 3)]
}

function playerWin() {
    roundResultText.textContent = 'The Player wins this round!';
    playerPts++;
    playerScore.textContent = "Player: " + playerPts;
}

function computerWin() {
    roundResultText.textContent = 'The Computer wins this round!';
    computerPts++;
    computerScore.textContent = "Computer: " + computerPts;
}

function playRound(playerChoice, computerChoice) {
    matchText.textContent ="Player picked " + playerChoice + " and Computer picked "
     + computerChoice + "!";
    if (playerChoice == choices[0]) {
        if (computerChoice == choices[0]) {
            roundResultText.textContent = "It's a tie!";
        }
        else if(computerChoice == choices[1]) {
            computerWin()
        }
        else if (computerChoice == choices[2]) {
            playerWin();
        }
    } else if (playerChoice == choices[1]) {
        if (computerChoice == choices[0]) {
            playerWin();
        }
        else if (computerChoice == choices[1]) {
            roundResultText.textContent = "It's a tie!";
        }
        else if(computerChoice == choices[2]) {
            computerWin();
        }
    } else if (playerChoice == choices[2]) {
        if (computerChoice == choices[1]) {
            playerWin();
        }
        else if (computerChoice == choices[2]) {
            roundResultText.textContent = "It's a tie!";
        }
        else if(computerChoice == choices[0]) {
            computerWin();
        }
    }
}

function checkWinner() {
    if (playerPts == 5) {
        winnerText.textContent = 'The Player wins the game!' + tryAgain;
    } else if (computerPts == 5) {
        winnerText.textContent = 'The Computer wins the game!' + tryAgain;
    }
}

function game(e) {
    const playerSelect = e.target.textContent;
    if (!playerSelect) return;
    let computerSelection = computerPlay()
    playRound(playerSelect, computerSelection)
}

window.addEventListener('click', function(e) {
    game(e);
    if (playerPts == 5 || computerPts == 5) {
        checkWinner();
    }
});

textDiv.appendChild(playerScore);
textDiv.appendChild(computerScore);

resultDiv.appendChild(matchText);
resultDiv.appendChild(roundResultText);

winnerDiv.appendChild(winnerText);