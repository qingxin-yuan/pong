import {SVG_NS, KEYS, boardGap, paddleWidth, paddleHeight, ballRadius} from '../settings'
import Board from './Board'
import Paddle from './Paddle'
import Ball from './Ball'
import Score from './Score'

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.boardGap = boardGap;
		this.paddleWidth = paddleWidth;
		this.paddleHeight = paddleHeight;
		this.ballRadius = ballRadius;
		this.pause = 0;

		//grab the div game element in html
		this.gameElement = document.getElementById(this.element);
		//instantiate new classes into the game
		this.board = new Board(this.width, this.height);

		this.ball = new Ball(this.ballRadius, this.width, this.height);

		this.paddleOne = new Paddle(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			this.boardGap, 
			(this.height-this.paddleHeight)/2,
			KEYS.a,
			KEYS.z
		);

		this.paddleTwo = new Paddle(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			(this.width-this.boardGap-this.paddleWidth), 
			(this.height-this.paddleHeight)/2,
			KEYS.up,
			KEYS.down
		);

		this.scoreOne = new Score(50, 30, 30);
		this.scoreTwo = new Score(206, 30, 30);

		document.addEventListener('keydown',event =>{
			if (event.key===KEYS.spaceBar){
				this.pause = !this.pause;
			}
		})
	}

	render() {
		if (this.pause){
			return;
		}

		this.gameElement.innerHTML = '';
		
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null,'width', this.width);
		svg.setAttributeNS(null,'height', this.height);
		svg.setAttributeNS(null,'viewbox', `0 0 ${this.width} ${this.height}`);
		svg.setAttributeNS(null, 'version','1.1');

		this.gameElement.appendChild(svg);

		this.board.render(svg);

		this.paddleOne.render(svg);
		this.paddleTwo.render(svg);

		this.ball.render(svg, this.paddleOne, this.paddleTwo);

		this.scoreOne.render(svg,this.paddleOne.score);
		this.scoreTwo.render(svg, this.paddleTwo.score);

		
	}

}