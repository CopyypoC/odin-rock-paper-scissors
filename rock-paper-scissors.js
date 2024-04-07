// 5 round rock, paper, scissors game against a computer
// Get random computer choice
function getComputerChoice() {
    // Scale random number to 3 options  
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}
// Get player choice
function getPlayerChoice() {
    let playerChoice = prompt('Rock, paper, or scissors?');
    // Make player choice lowercase for easy comparison
    return playerChoice.toLowerCase();
}
// Make play round function
    // Set computer choice
    // Set player choice
    // Set score
    // Compare computer and player choice to decide winner
    // Increase score for winner
// Play game of 5 rounds
    // Call play round function 5 times
    // Display winner and score after 5 rounds