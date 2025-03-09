const tracks = [
    {
        title: "Sample Track 1",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        title: "Sample Track 2",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    }
];

const audioPlayer = document.getElementById('audio-player');
const trackList = document.getElementById('track-list');
let currentTrackIndex = 0;

// Populate track list
tracks.forEach((track, index) => {
    const div = document.createElement('div');
    div.className = 'track-item';
    div.textContent = track.title;
    div.onclick = () => playTrack(index);
    trackList.appendChild(div);
});

// Player controls
document.getElementById('play-btn').addEventListener('click', () => {
    audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
});

document.getElementById('next-btn').addEventListener('click', nextTrack);
document.getElementById('prev-btn').addEventListener('click', previousTrack);

function playTrack(index) {
    currentTrackIndex = index;
    audioPlayer.src = tracks[index].url;
    audioPlayer.play();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
}

function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playTrack(currentTrackIndex);
}

// Autoplay next track
audioPlayer.addEventListener('ended', nextTrack);