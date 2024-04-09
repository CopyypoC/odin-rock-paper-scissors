// 5 round rock, paper, scissors game against a computer
let roundsPlayed = 0;
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
function getPlayerChoice(choice) {
    // Make player choice lowercase for easy comparison
    return choice.toLowerCase();
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
        return (`Winner: ${playerScore} to ${computerScore}!`)
    } else {
        return (`Loser: ${playerScore} to ${computerScore}!`)
    }
}

function playGame() {
    let outcomeMessage = '';
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    let results = document.querySelector('#results');
    // Set all buttons into a list
    const choiceButtons = document.querySelectorAll('button');
    // For each button, add a click event listener
    choiceButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            // Play a round with the button choice
            outcomeMessage = playRound(getPlayerChoice(button.textContent), 
            getComputerChoice());
            //Calculate score
            playerScore = calcWin(outcomeMessage, playerScore);
            computerScore = calcLose(outcomeMessage, computerScore);
            roundsPlayed++;

            if (playerScore === 5 || computerScore === 5) {
                results.textContent = 
                `Round ${roundsPlayed} - 
                FINISH! ${createFinalResult(playerScore, computerScore)}
                ${outcomeMessage}`;
                playerScore = 0;
                computerScore = 0;
                roundsPlayed = 0;               
            } else {
                // Update results with message and score
                results.textContent = `Round ${roundsPlayed} - ${outcomeMessage}!
                Player: ${playerScore} Computer: ${computerScore}`;
            }
        });
    });
}

playGame();
// custom event on roundsplayed