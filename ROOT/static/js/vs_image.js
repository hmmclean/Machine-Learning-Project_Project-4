// vs_image.js

document.addEventListener('DOMContentLoaded', function() {
    let currentTime = 10;
    let gameInProgress = true; // Flag to track if the game is in progress
    let timerInterval;

    const statusInfoElement = document.getElementById('statusInfo');

    // Initially hide the statusInfo element
    statusInfoElement.style.visibility = 'hidden';

    function countdown() {
        if (currentTime === 0 && gameInProgress) {
            statusInfoElement.style.visibility = 'visible';
        }

        if (currentTime <= 0) {
            clearInterval(timerInterval); // Stop subsequent timers
        } else {
            currentTime--;
        }
    }

    // Start the timer
    timerInterval = setInterval(countdown, 1000);

    // Cleanup function to clear interval when needed
    function cleanupTimer() {
        clearInterval(timerInterval);
    }

    // Cleanup timer when needed
    function cleanupWhenNeeded() {
        if (currentTime <= 0 || !gameInProgress) {
            cleanupTimer();
        }
    }

    // Cleanup when needed
    cleanupWhenNeeded();
});