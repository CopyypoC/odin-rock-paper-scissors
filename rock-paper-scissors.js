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
function playRound(playerSelection, computerSelection) {
    // Compare computer and player choice to decide winner
    if (playerSelection === computerSelection) {
        return (`You tied! Both played ${playerSelection}`);
    }
    // Show rock outcomes
    if (playerSelection === 'rock') {
        switch (playerSelection) {
            case (computerSelection === 'paper'):
                return 'You lose! Rock doesn\'t beat paper';
            case (computerSelection === 'scissors'):
                return 'You win! Rock beats scissors';           
        }
    // Show paper outcomes
    } else if (playerSelection === 'paper') {
        switch (playerSelection) {
            case (computerSelection === 'scissors'):
                return 'You lose! Paper doesn\'t beat rock';
            case (computerSelection === 'rock'):
                return 'You win! Paper beats scissors';           
        }
    // Show scissors outcomes
    } else if (playerSelection === 'scissors') {
        switch (playerSelection) {
            case (computerSelection === 'rock'):
                return 'You lose! Scissors doesn\'t beat rock';
            case (computerSelection === 'paper'):
                return 'You win! Scissors beats paper';           
        }
    }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));
// Play game of 5 rounds
    // Call play round function 5 times