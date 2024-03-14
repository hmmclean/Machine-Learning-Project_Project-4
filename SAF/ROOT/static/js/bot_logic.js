// bot_logic.js

document.addEventListener('DOMContentLoaded', function() {
  const computerHandImage = document.getElementById('computerHandImage');
  const hands = ['cpaperhand.png', 'cscissorshand.png', 'clizardhand.png', 'crockhand.png', 'cspockhand.png']; // Add other hand images as needed

  const hand = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  const handImages = {
      'rock': 'Images/crockhand.png',
      'paper': 'Images/cpaperhand.png',
      'scissors': 'Images/cscissorshand.png',
      'lizard': 'Images/clizardhand.png',
      'spock': 'Images/cspockhand.png'
  };

  function playComputerHand() {
      const randomIndex = Math.floor(Math.random() * hands.length);
      const selectedHand = hands[randomIndex];

      // Change the src attribute of the computer hand image to the status hand
      computerHandImage.src = 'Images/cstatushand.png';

      // Trigger animation after a 2-second delay
      setTimeout(() => {
          // Trigger animation
          computerHandImage.classList.add('computer-hand-animation');

          // Create a Promise to resolve when animation ends
          const animationPromise = new Promise((resolve) => {
              // After animation, show selected hand
              computerHandImage.addEventListener('animationend', function() {
                  // Change the src attribute of the computer hand image to the selected hand
                  computerHandImage.src = 'Images/' + selectedHand;

                  // Remove animation class
                  computerHandImage.classList.remove('computer-hand-animation');

                  // Resolve the Promise
                  resolve();
              });
          });

          // Return the Promise
          return animationPromise;
      }, 3000); // 2-second delay
  }

  // Countdown function
  function countdown() {
      let currentTime = 15;

      function updateTimerDisplay(time) {
          // Update timer display code here
      }

      // Start the countdown timer
      const timerInterval = setInterval(() => {
          updateTimerDisplay(currentTime);

          if (currentTime <= 0) {
              clearInterval(timerInterval); // Stop subsequent timers
              playComputerHand(); // Trigger computer's animation
          } else {
              currentTime--;
          }
      }, 1000);
  }

  // Call countdown function to start the timer
  countdown();

  // Add event listener to player's hand selection
  document.querySelectorAll('.icon').forEach(function(icon) {
      icon.addEventListener('click', function() {
      });
  });
});