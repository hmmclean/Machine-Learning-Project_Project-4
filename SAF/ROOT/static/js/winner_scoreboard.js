// winner_scoreboard.js

    // Function to determine which hand beats which
    function determineWinnerDescription(playerChoice, computerSelectedHand) {
        const winningHands = {
            'rock': ['scissors', 'lizard'],
            'paper': ['rock', 'spock'],
            'scissors': ['paper', 'lizard'],
            'lizard': ['paper', 'spock'],
            'spock': ['scissors', 'rock']
        };
    
        let description;
        let winner;
    
        if (winningHands[playerChoice].includes(computerSelectedHand)) {
            description = playerChoice + " beats " + computerSelectedHand;
            winner = 'Player';
        } else if (winningHands[computerSelectedHand].includes(playerChoice)) {
            description = computerSelectedHand + " beats " + playerChoice;
            winner = 'Computer';
        } else {
            description = "It's a draw!";
            winner = 'Draw';
        }
    
        // Display the description for 3 seconds
        let roundResultElement = document.getElementById('roundResult');
        roundResultElement.textContent = description;
    
        setTimeout(() => {
            // Clear the description after 3 seconds
            roundResultElement.textContent = '';
            // Announce the round winner
            displayRoundResult(winner);
        }, 3000);
    }
    
    
    // Function to update the scores and display them
    function updateScores() {
        document.querySelector('.player-score-box').textContent = playerScore;
        document.querySelector('.computer-score-box').textContent = computerScore;
    }
    
    // Function to display the round result and update scores
    function displayRoundResult(winner) {
        let roundResultElement = document.getElementById('roundResult');
        if (winner !== 'Draw') {
            // Display the round winner
            roundResultElement.textContent = 'ROUND WINNER : ' + winner + '! ';
    
            // Log the winner
            console.log('Round Winner:', winner);
    
            // Update scores based on the winner
            if (winner === 'Player') {
                playerScore++;
            } else if (winner === 'Computer') {
                computerScore++;
            }
        } else {
            roundResultElement.textContent = "It's a draw!"; // Display draw result
            console.log("It's a draw!");
        }
    
        // Update the scores displayed on the webpage
        updateScores();
    }
    
    
            // Function to simulate the game flow
            function playGame(playerChoice, computerSelectedHand) {
                // Determine who wins and get description
                determineWinnerDescription(playerChoice, computerSelectedHand);
            }