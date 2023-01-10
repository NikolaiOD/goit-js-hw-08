// Инициализация плеера
import Player from '@vimeo/player';
// Инициализация lodash
import throttle from "lodash.throttle";

const vimeoPlayer = document.querySelector('#vimeo-player');

const player = new Player(vimeoPlayer);

player.on('timeupdate', throttle(playbackTime, 1000));

function playbackTime(event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
};

const getPlaybackTime = (
    localStorage.getItem('videoplayer-current-time') || 0
);

player.setCurrentTime(getPlaybackTime);
