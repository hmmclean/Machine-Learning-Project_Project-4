// computer_textchoice.js

function computerChoiceText() {
    let currentTime = 10;

    const computerChoiceElement = document.getElementById('computerChoice');

    // Ensure that computerChoiceElement is visible at the start of the function
    computerChoiceElement.style.visibility = 'visible';

    function countdown() {
        if (currentTime === 5) {
            computerChoiceElement.style.visibility = 'hidden';
        }

        if (currentTime <= 0) {
            clearInterval(timerInterval); // Stop subsequent timers
        } else {
            currentTime--;
        }
    }

    // Start the timer
    const timerInterval = setInterval(countdown, 1000);

    // Cleanup event listener when not needed
    function cleanupTimer() {
        clearInterval(timerInterval);
    }

    // Cleanup timer when needed
    function cleanupWhenNeeded() {
        if (currentTime <= 0) {
            cleanupTimer();
        }
    }

    // Cleanup when needed
    cleanupWhenNeeded();
}

document.addEventListener('DOMContentLoaded', function() {
    computerChoiceText();
});