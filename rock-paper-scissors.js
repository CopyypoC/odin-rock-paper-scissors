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
                return 'You lose! Paper doesn\'t beat scissors';
            case (computerSelection === 'rock'):
                return 'You win! Paper beats rock';           
        }
    // Show scissors outcomes
    } else {
        switch (playerSelection !== computerSelection) {
            case (computerSelection === 'rock'):
                return 'You lose! Scissors doesn\'t beat rock';
            case (computerSelection === 'paper'):
                return 'You win! Scissors beats paper';           
        }
    }
    return;
}

// Increase player score on win
function calcWin(outcomeMessage, playerScore) {
    if (outcomeMessage.includes('win')) {
        playerScore++;
        return playerScore;
    }
    return playerScore;
}
// Increase computer score on lose
function calcLose(outcomeMessage, computerScore) {
    if (outcomeMessage.includes('lose')) {
        computerScore++;
        return computerScore;
    }
    return computerScore;
}

// Create final result message
function createFinalResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`You win ${playerScore} to ${computerScore}!`)
    } else if (playerScore === computerScore) {
        console.log(`You tie ${playerScore} to ${computerScore}!`)
    } else {
        console.log(`You lose ${playerScore} to ${computerScore}!`)
    }
}

