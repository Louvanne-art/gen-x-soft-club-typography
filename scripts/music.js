let audio = document.getElementById("myAudio");
audio.volume = 0.2;
const audioButton = document.getElementById("music-player-button");
const audioButtonImage = document.getElementById("music-player-button-image");

let audioIsPlaying = false;

function playAudio() {
    audioIsPlaying = true;
    audioButtonImage.src = 'public/Pause.png'
    audio.play();
}

function pauseAudio() {
    audioIsPlaying = false;
    audioButtonImage.src = 'public/play.png'
    audio.pause();
}

audioButton.addEventListener('click', () => {
    if (audioIsPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
})