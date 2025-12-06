const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const volumeSlider = document.getElementById('volume');
const speedSlider = document.getElementById('playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Play / Pause toggle
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = "❚❚";
    } else {
        video.pause();
        playButton.textContent = "►";
    }
}

// Update progress bar
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = percent + "%";
}

// Scrub video when clicking progress bar
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Update volume
volumeSlider.addEventListener("input", () => {
    video.volume = volumeSlider.value;
});

// Update playback speed
speedSlider.addEventListener("input", () => {
    video.playbackRate = speedSlider.value;
});

// Skip buttons
rewindButton.addEventListener("click", () => {
    video.currentTime -= 10;
});

forwardButton.addEventListener("click", () => {
    video.currentTime += 25;
});

// Event listeners
playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);
