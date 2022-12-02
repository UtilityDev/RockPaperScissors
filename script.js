const options = ["rock", "paper", "scissors"];

// Generate random choice
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // If the player and the computer choose the same thing
    if (playerSelection == computerSelection) {
        return "Tie!";
    }

    // player = rock | computer = paper
    if (playerSelection == options[0] && computerSelection == options[1]) {
        return "You lose! Paper beats rock.";
    }
    // player = rock | computer = scissors
    if (playerSelection == options[0] && computerSelection == options[2]) {
        return "You win! Rock beats scissors.";
    }
    // player = paper | computer = rock
    if (playerSelection == options[1] && computerSelection == options[0]) {
        return "You win! Paper beats rock.";
    }
    // player = paper | computer = scissors
    if (playerSelection == options[1] && computerSelection == options[2]) {
        return "You lose! Scissors beats paper.";
    }
    // player = scissors | computer = rock
    if (playerSelection == options[2] && computerSelection == options[0]) {
        return "You lose! Rock beats paper.";
    }
    // player = scissors | computer = paper
    if (playerSelection == options[2] && computerSelection == options[1]) {
        return "You win! Scissors beats paper.";
    }
}

player = prompt("Rock, Paper, or Scissors?");
computer = getComputerChoice();

console.log(playRound(player, computer));
console.log(`You chose: ${player}, computer chose: ${computer}`);