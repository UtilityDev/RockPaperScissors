const options = ["rock", "paper", "scissors"];

// Generate random choice
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)].toLowerCase();
}