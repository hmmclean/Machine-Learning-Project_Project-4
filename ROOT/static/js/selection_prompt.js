// selection_prompt.js

function playerPrompt() {
    // Select all icon elements and the text element
    var icons = document.querySelectorAll('.icon');
    var selectHandText = document.getElementById('selectHandText');

    // Make the text visible
    selectHandText.classList.remove('invisible');

    function removeEventListeners() {
        icons.forEach(function(icon) {
            icon.removeEventListener('click', handleClick);
        });
    }

    // Function to handle click event
    function handleClick() {
        // Make the text invisible
        selectHandText.classList.add('invisible');
        // Remove event listeners after use
        removeEventListeners();
    }

    // Add click event listeners to icons
    function addEventListeners() {
        icons.forEach(function(icon) {
            icon.addEventListener('click', handleClick);
        });
    }

    // Call the function to initialize the icon click handler
    addEventListeners();
}