const video = document.querySelector('.player__video');
const playBtn = document.querySelector('.toggle');
const volumeSlider = document.getElementById('volume');
const speedSlider = document.getElementById('playbackSpeed');
const rewindBtn = document.querySelector('.rewind');
const forwardBtn = document.querySelector('.forward');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Toggle play/pause
function togglePlay() {
    if (video.paused) {
        video.play();
        playBtn.textContent = "❚❚";
    } else {
        video.pause();
        playBtn.textContent = "►";
    }
}

// Update progress bar
function updateProgressBar() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = percent + "%";
}

// Click on progress bar to seek
function scrub(e) {
    const seekTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = seekTime;
}

// Volume + Speed controls
volumeSlider.addEventListener("input", () => {
    video.volume = volumeSlider.value;
});
speedSlider.addEventListener("input", () => {
    video.playbackRate = speedSlider.value;
});

// Skip buttons
rewindBtn.addEventListener("click", () => {
    video.currentTime -= 10;
});
forwardBtn.addEventListener("click", () => {
    video.currentTime += 25;
});

// Listeners
playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgressBar);
progress.addEventListener("click", scrub);
