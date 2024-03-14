// video_popup.js

window.onload = function() {
    var videoPopup = document.getElementById("videoPopup");
    var video = document.getElementById("video");
    var playButton = document.getElementById("play-button");
    var closeButton = document.getElementById("close-button");
    
    // Show the video popup when the page loads
    videoPopup.style.display = "block";

    // Play the video when the page loads
    video.play();

    // Hide the play button when the video starts playing
    video.addEventListener("play", function() {
        playButton.style.display = "none";
        video.muted = false; // Unmute the video after it starts playing
    });

    // Show the play button when the video is paused
    video.addEventListener("pause", function() {
        playButton.style.display = "block";
    });

    // Toggle play/pause when the video is clicked
    video.addEventListener("click", function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Toggle play/pause when the play button is clicked
    playButton.addEventListener("click", function() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Close button functionality
    closeButton.addEventListener("click", function() {
        // Pause the video and hide the video popup when the close button is clicked
        video.pause();
        video.currentTime = 0; // Reset video to the beginning
        video.muted = true; // Mute the video
        videoPopup.style.display = "none";
    });

    // Close video popup after a delay when video ends
    video.addEventListener("ended", function() {
        setTimeout(function() {
            videoPopup.style.display = "none"; // Hide the video popup after a delay
        }, 1500); // Adjust delay time as needed (1000 milliseconds = 1 second)
    });
}