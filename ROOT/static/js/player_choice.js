// player_choice.js

function initializePlayerChoice() {
        let initialTime = 10; // Reduced initial time by 5 seconds
        let currentTime = initialTime;
        let animationInProgress = false;

        const timerElement = document.querySelector(".time");
        const textContainer = document.querySelector(".text-container");

        function updateTimerDisplay(time) {
          timerElement.textContent = time + " sec";
          textContainer.style.opacity = time > 0 ? "1" : "0";
        }

        function performSelectionAnimation() {
          if (!animationInProgress) {
            animationInProgress = true;
            let playerHandImage = document.getElementById("playerHandImage");
            let selectedIcon = document.querySelector(".icon.selected");
            if (playerHandImage && selectedIcon) {
              setTimeout(() => {
                playerHandImage.classList.add("bounce-animation");
                let animationEndHandler = function handler() {
                  let newHandImageSrc =
                    selectedIcon.getAttribute("data-hand-image");
                  playerHandImage.src = newHandImageSrc;
                  playerHandImage.classList.remove("bounce-animation");
                  animationInProgress = false;
                  playerHandImage.removeEventListener(
                    "animationend",
                    animationEndHandler
                  );
                };
                playerHandImage.addEventListener(
                  "animationend",
                  animationEndHandler
                );
              }, 2000); // Unchanged delay for animation launch
            } else {
              animationInProgress = false;
            }
          }
        }

        function countdown() {
          updateTimerDisplay(currentTime);

          if (currentTime <= 0) {
            textContainer.style.opacity = "0";

            setTimeout(() => {
              if (document.querySelector(".icon.selected")) {
                performSelectionAnimation();
              }

              clearInterval(timerInterval);
            }, 1000);
          } else {
            currentTime--;
            // Check for 1 second remaining and no selection
            if (
              currentTime === 0 &&
              round > 1 &&
              !document.querySelector(".icon.selected")
            ) {
              selectRandomIcon();
            }
          }
        }

        function selectRandomIcon() {
          const allIcons = document.querySelectorAll(".icon");
          const randomIndex = Math.floor(Math.random() * allIcons.length); // Get random index

          selectPlayer(allIcons[randomIndex]); // Select icon at random index
        }

        const timerInterval = setInterval(countdown, 1000);

        let selectionInProgress = false;

        function selectPlayer(icon) {
          if (!animationInProgress) {
            document.querySelectorAll(".icon").forEach(function (otherIcon) {
              otherIcon.classList.remove("selected");
              otherIcon.style.backgroundImage =
                "url('" + otherIcon.getAttribute("data-default") + "')";
            });
            icon.classList.add("selected");
            icon.style.backgroundImage =
              "url('" + icon.getAttribute("data-hover") + "')";
            document
              .getElementById("selectHandText")
              .classList.add("invisible");
          }
        }

        function handleMouseOver() {
          this.style.backgroundImage =
            "url('" + this.getAttribute("data-hover") + "')";
        }

        function handleMouseOut() {
          if (!this.classList.contains("selected")) {
            this.style.backgroundImage =
              "url('" + this.getAttribute("data-default") + "')";
          }
        }

        function handleClick() {
          const playerChoice = this.getAttribute("data-hand");
          selectPlayer(this);
        }

        function addEventListeners() {
          document.querySelectorAll(".icon").forEach(function (icon) {
            icon.addEventListener("mouseover", handleMouseOver);
            icon.addEventListener("mouseout", handleMouseOut);
            icon.addEventListener("click", handleClick);
          });
        }

        addEventListeners();

        function removeEventListeners() {
          document.querySelectorAll(".icon").forEach(function (icon) {
            icon.removeEventListener("mouseover", handleMouseOver);
            icon.removeEventListener("mouseout", handleMouseOut);
            icon.removeEventListener("click", handleClick);
          });
        }

        function cleanupEventListeners() {
          removeEventListeners();
        }

        function getPlayerChoice() {
          let selectedIcon = document.querySelector(".icon.selected");
          if (selectedIcon) {
            const selectedHand = selectedIcon.getAttribute("data-hand");
            console.log("Player Chose: ", selectedHand);
            return selectedHand;
          }
        }
      }