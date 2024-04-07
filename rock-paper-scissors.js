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
// Make both choices same case for comparison
// Compare computer and player choice to decide winner
// Increase score for winner
// Display winner and score after 5 rounds