const music = document.querySelector('audio');
const img = document.querySelector('img')
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');



//for play
let is_playing = false;
let playMusic = () => {
    music.play();
    is_playing = true;
    play.classList.replace('fa-circle-play', 'fa-circle-pause');
    img.classList.add('anime');
}
//for pause
let pauseMusic = () => {
    music.pause();
    is_playing = false;
    play.classList.replace( 'fa-circle-pause', 'fa-circle-play');
    img.classList.remove('anime');
}
play.addEventListener('click', () => {
   is_playing ? pauseMusic() : playMusic();
    }
)
let songs = [
    {
        name: "Amplifier",
        title: "Amplifier",
        artist: "Imran khan",
    },
    {
        name: "gulabi_ankhen",
        title: "gulabi",
        artist: "Atif aslam",
    },
    {
        name: "pasoori",
        title: "pasoori1",
        artist: "pakistani band",
    },
]
