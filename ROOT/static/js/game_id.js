// game_id.js

function generateGameId() {
    const timestamp = new Date().getTime();
    const randomId = Math.floor(Math.random() * 1000000); // Adjust the range of random numbers as needed
    return `${randomId}`;
}

// Log the generated game ID to the console
function logGameId() {
    const gameId = generateGameId();
    console.log('Game ID:', gameId);
    return gameId; // Return the generated game ID for later use
}

// Call the function to log the game ID when the game opens
const gameId = logGameId();

// Call other functions after logging the game ID
function updateRoundNumber() {
    document.getElementById('roundNumber').textContent = 'ROUND ' + gameState.round;
    console.log('Round:', gameState.round);
}