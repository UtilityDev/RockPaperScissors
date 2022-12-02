const options = ["rock", "paper", "scissors"];

// player & computer score
let playerScore = 0;
let computerScore = 0;

// Generate random choice
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // If the player and the computer choose the same thing
    if (playerSelection == computerSelection) {
        return `${playerSelection} ties with ${computerSelection}!`;
    }

    // player = rock | computer = paper
    if (playerSelection == options[0] && computerSelection == options[1]) {
        computerScore++;
        return "You lose! Paper beats rock.";
    }
    // player = rock | computer = scissors
    if (playerSelection == options[0] && computerSelection == options[2]) {
        playerScore++;
        return "You win! Rock beats scissors.";
    }
    // player = paper | computer = rock
    if (playerSelection == options[1] && computerSelection == options[0]) {
        playerScore++;
        return "You win! Paper beats rock.";
    }
    // player = paper | computer = scissors
    if (playerSelection == options[1] && computerSelection == options[2]) {
        computerScore++;
        return "You lose! Scissors beats paper.";
    }
    // player = scissors | computer = rock
    if (playerSelection == options[2] && computerSelection == options[0]) {
        computerScore++;
        return "You lose! Rock beats paper.";
    }
    // player = scissors | computer = paper
    if (playerSelection == options[2] && computerSelection == options[1]) {
        playerScore++;
        return "You win! Scissors beats paper.";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice()));
    }
    console.log(`Cool match! Here are the results:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    
    // determine the winner
    if (playerScore > computerScore) {
        console.log(`You won by ${playerScore - computerScore} points! Nice!`);
    } else if (computerScore > playerScore) {
        console.log(`You lost by ${computerScore - playerScore} points! Better luck next time!`);
    } else {
        console.log("It's a tie!");
    }

    // resetting score
    playerScore     = 0;
    computerScore   = 0;
}

// player = prompt("Rock, Paper, or Scissors?");
// computer = getComputerChoice();

game();