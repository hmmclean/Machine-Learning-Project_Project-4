// round_number.js

document.addEventListener('DOMContentLoaded', function() {
    let roundNumberElement = document.getElementById('roundNumber');
    let round = 1;
    let animationInProgress = false;
    let timerInterval;
    let hideTimer;
    let isFirstRoundDisplayed = false; // Flag to track if the first round number has been displayed

    function updateRoundNumber() {
        roundNumberElement.textContent = 'ROUND ' + round;
        console.log('Current Round:', round)
    }

    function hideRoundNumber() {
        roundNumberElement.style.display = 'none';
    }

    function showRoundNumber() {
        roundNumberElement.style.display = 'block';
    }

    updateRoundNumber();
    showRoundNumber();

    function onAnimationEnd() {
        animationInProgress = false;
        hideRoundNumber();
        clearInterval(timerInterval);
        setTimeout(startNextRound, 2000);
    }


    function startTimer() {
        let currentTime = 10;
        clearInterval(timerInterval);

        function updateTimerDisplay() {
            currentTime--;
            if (currentTime <= 0) {
                clearInterval(timerInterval);
                hideTimer = setTimeout(hideRoundNumber, 1000);
            }
        }

        timerInterval = setInterval(updateTimerDisplay, 1000);
    }

    startTimer();

    function cleanupResources() {
        clearInterval(timerInterval);
        clearTimeout(hideTimer);
    }

    window.addEventListener('beforeunload', cleanupResources);
});