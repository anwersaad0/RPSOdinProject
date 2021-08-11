const choices = ['rock', 'paper', 'scissors']
/*choices.sort((str1, str2) => str1.localeCompare(str2, undefined, { sensitivity: 'accent'}))*/
let rounds = 0;

function computerPlay () {
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerChoice, computerChoice) {
    console.log("Player picked " + playerChoice + " and Computer picked "
     + computerChoice + "!")
    if (playerChoice == choices[0]) {
        if (computerChoice == choices[0]) {
            console.log("It's a tie!")
        }
        else if(computerChoice == choices[1]) {
            console.log('The Computer Wins!')
        }
        else if (computerChoice == choices[2]) {
            console.log('The Player Wins!')
        }
    } else if (playerChoice == choices[1]) {
        if (computerChoice == choices[0]) {
            console.log('The Player Wins!')
        }
        else if (computerChoice == choices[1]) {
            console.log("It's a tie!")
        }
        else if(computerChoice == choices[2]) {
            console.log('The Computer Wins!')
        }
    } else if (playerChoice == choices[2]) {
        if (computerChoice == choices[1]) {
            console.log('The Player Wins!')
        }
        else if (computerChoice == choices[2]) {
            console.log("It's a tie!")
        }
        else if(computerChoice == choices[0]) {
            console.log('The Computer Wins!')
        }
    }
}

function game() {
    let playerSelect = prompt("Rock, Paper, or Scissors?")
    playerSelect = playerSelect.toLowerCase()
    let computerSelection = computerPlay()
    playRound(playerSelect, computerSelection)
}

function play() {
    while(rounds < 5) {
        game()
        rounds++
    }
}
play()