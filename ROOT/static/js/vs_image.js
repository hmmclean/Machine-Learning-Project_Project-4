// vs_image.js

function vsImage() {
    let currentTime = 10;
    let gameInProgress = true; // Flag to track if the game is in progress
    let timerInterval;

    const statusInfoElement = document.getElementById('statusInfo');

    // Initially hide the statusInfo element
    statusInfoElement.style.visibility = 'hidden';

    function countdown() {
    // Check if it's round 1 or if the timer has reached 0
    if ((round === 1 && currentTime === 0 && gameInProgress)) {
        statusInfoElement.style.visibility = 'visible';
    }

    // Additional condition for rounds 2 to 10
    if (round > 1 && round <= 10 && currentTime === 0 && gameInProgress) {
        setTimeout(() => {
            statusInfoElement.style.visibility = 'visible';
        }, 2750); // Wait for 2 seconds before showing the VS image
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

    // Function to set game in progress or not
    function setGameInProgress(inProgress) {
        gameInProgress = inProgress;
    }

    // Expose the function to set game in progress status
    return {
        setGameInProgress: setGameInProgress
    };
}

// Call vsImage when the DOM content is loaded
const vsImageHandler = vsImage();
document.addEventListener('DOMContentLoaded', vsImageHandler);