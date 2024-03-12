// selection_prompt.js

document.addEventListener('DOMContentLoaded', function() {
    // Select all icon elements and the text element
    var icons = document.querySelectorAll('.icon');
    var selectHandText = document.getElementById('selectHandText');

    // Function to remove event listeners
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

    addEventListeners();
});