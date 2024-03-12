// auto_player_selection.js

document.addEventListener('DOMContentLoaded', function() {
    let currentTime = 10;
    let selectionMade = false;

    function updateTimerDisplay(time) {
        // Update timer display code here
    }

    function selectPlayer(icon) {
        // Highlight the selected icon and perform any other necessary actions
        icon.classList.add('selected');
        icon.style.backgroundImage = "url('" + icon.getAttribute('data-hover') + "')";
        document.getElementById('selectHandText').classList.add('invisible');
        selectionMade = true;
    }

    function getRandomIcon() {
        const icons = document.querySelectorAll('.icon');
        const randomIndex = Math.floor(Math.random() * icons.length);
        return icons[randomIndex];
    }

    function countdown() {
        updateTimerDisplay(currentTime);

        if (currentTime === 1 && !selectionMade) {
            const randomIcon = getRandomIcon();
            selectPlayer(randomIcon);
        }

        if (currentTime <= 0) {
            clearInterval(timerInterval);
            // You may want to handle what happens when time runs out here
        } else {
            currentTime--;
        }
    }

    const timerInterval = setInterval(countdown, 1000);

    // Add event listener to each icon for player's selection
    document.querySelectorAll('.icon').forEach(function(icon) {
        icon.addEventListener('click', function() {
            // Set selectionMade flag to true when the player makes a selection
            selectionMade = true;
            // Highlight the selected icon
            selectPlayer(this);
        });
    });
});