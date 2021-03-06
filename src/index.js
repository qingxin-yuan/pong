import './styles/game.css';
import Game from './partials/Game';

// create a game instance
const game = new Game('game', 512, 256);

(function gameLoop() {//infinite gameloop
    game.render();
    requestAnimationFrame(gameLoop);
})();

document.getElementsByClassName('text')[0].setAttribute('class','text');
document.getElementsByClassName('text')[0].innerHTML = `Player  wins!`;


const music = new Audio('public/sounds/the-warden-maceo-plex-clipped.mp3');
music.play();
