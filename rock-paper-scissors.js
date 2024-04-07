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
    // Show tie if selections are the same
    if (playerSelection === computerSelection) {
        return (`You tied! Both played ${playerSelection}`);
    }
    // Check for differing selections and determine the outcome
    // Show rock outcomes
    if (playerSelection === 'rock') {
        switch (playerSelection !== computerSelection) {
            case (computerSelection === 'paper'):
                return 'You lose! Rock doesn\'t beat paper';
            case (computerSelection === 'scissors'):
                return 'You win! Rock beats scissors';           
        }
    // Show paper outcomes
    } else if (playerSelection === 'paper') {
        switch (playerSelection !== computerSelection) {
            case (computerSelection === 'scissors'):
                return 'You lose! Paper doesn\'t beat rock';
            case (computerSelection === 'rock'):
                return 'You win! Paper beats scissors';           
        }
    // Show scissors outcomes
    } else if (playerSelection === 'scissors') {
        switch (playerSelection !== computerSelection) {
            case (computerSelection === 'rock'):
                return 'You lose! Scissors doesn\'t beat rock';
            case (computerSelection === 'paper'):
                return 'You win! Scissors beats paper';           
        }
    }
    return;
}

// // Play game of 5 rounds
// function playGame() {
//     // Set scores for both player and computer
//     let playerScore = 0;
//     let computerScore = 0;
//     // Set outcome message
//     let outcomeMessage = playRound(getPlayerChoice(), getComputerChoice());
//     // Show outcome message
//     console.log(outcomeMessage);
//     // Change scores after the round
//     (outcomeMessage.includes('win')) ? playerScore++ : computerScore ++;
//     // Display final result message
//     (playerScore > computerScore) ? console.log(`You win ${playerScore} to ${computerScore}!`) : console.log(`You lose ${playerScore} to ${computerScore}!`);
// }
// playGame();