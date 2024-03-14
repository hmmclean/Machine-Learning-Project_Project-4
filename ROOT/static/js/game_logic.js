// game_logic.js


function initializeBotLogic() {
    // Define animationInProgress as a global variable
    let animationInProgress = false;

    const computerHandImage = document.getElementById("computerHandImage");
    const hands = ["rock", "paper", "scissors", "lizard", "spock"]; // Update with correct hand choices
    const handImages = {
      rock: "Images/crockhand.png",
      paper: "Images/cpaperhand.png",
      scissors: "Images/cscissorshand.png",
      lizard: "Images/clizardhand.png",
      spock: "Images/cspockhand.png",
    };

    // Updated function to include countdown and computer hand selection
    function playComputerHand() {
      return new Promise((resolve) => {
        // Ensure the function returns a Promise
        let currentTime = 10;
        let computerHandChosen = false; // Flag to track if computer's hand has been chosen

        // Countdown function
        function countdown() {
          const timerInterval = setInterval(() => {
            if (currentTime <= 0 && !computerHandChosen) {
              clearInterval(timerInterval); // Stop subsequent timers
              computerHandChosen = true; // Set flag to indicate computer's hand has been chosen

              // Select a random hand for the computer
              const randomIndex = Math.floor(Math.random() * hands.length);
              const selectedHand = hands[randomIndex];
              computerSelectedHand = selectedHand; // Assigning the selected hand to computerSelectedHand

              // Change the src attribute of the computer hand image to the status hand
              computerHandImage.src = "Images/cstatushand.png";

              // Trigger animation after a 2-second delay
              setTimeout(() => {
                // Trigger animation
                computerHandImage.classList.add("computer-hand-animation");

                // After animation, show selected hand
                computerHandImage.addEventListener(
                  "animationend",
                  function handler() {
                    const selectedImage = handImages[computerSelectedHand];
                    if (selectedImage) {
                      computerHandImage.src = selectedImage;
                      console.log("Computer Chose:", computerSelectedHand); // Log selected hand
                    }

                    // Remove animation class
                    computerHandImage.classList.remove(
                      "computer-hand-animation"
                    );

                    // Resolve the Promise with the selected hand
                    resolve(computerSelectedHand);

                    // Remove event listener to avoid memory leaks
                    computerHandImage.removeEventListener(
                      "animationend",
                      handler
                    );
                  }
                );
              }, 3000); // 2-second delay
            } else {
              currentTime--;
            }
          }, 1000);
        }

        // Start the countdown timer
        countdown();
      });
    }

    // Call the function to get the computer's choice
    playComputerHand().then((computerSelectedHand) => {
      // Get the player's choice
      const playerChoice = getPlayerChoice();

      // Pass both player's and computer's choices to the playGame function
      playGame(playerChoice, computerSelectedHand);
    });

    // Function to get the player's choice
    function getPlayerChoice() {
      // Get the selected icon element
      let selectedIcon = document.querySelector(".icon.selected");
      if (selectedIcon) {
        // Retrieve the hand represented by the selected icon
        const selectedHand = selectedIcon.getAttribute("data-hand");
        console.log("Player Chose: ", selectedHand);
        return selectedHand;
      }
    }
  }