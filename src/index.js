import './styles/game.css';
import Game from './partials/Game';

// create a game instance
const game = new Game('game', 512, 256);

(function gameLoop() {//infinite gameloop
    game.render();
    requestAnimationFrame(gameLoop);
})();
