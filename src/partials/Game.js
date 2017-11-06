import {SVG_NS, KEYS, boardGap, paddleWidth, paddleHeight, ballRadius} from '../settings'
import Board from './Board'
import Paddle from './Paddle'
import Ball from './Ball'
import Score from './Score'
import TrippingBall from './TrippingBall'

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
		
		this.trippingball1 = new TrippingBall (this.ballRadius*2, this.width, this.height);
		this.trippingball2 = new TrippingBall (this.ballRadius*0.7, this.width, this.height);
		this.trippingball3 = new TrippingBall (this.ballRadius*1.2, this.width, this.height);
		this.trippingball4 = new TrippingBall (this.ballRadius, this.width, this.height);
		this.trippingball5 = new TrippingBall (this.ballRadius*2.5, this.width, this.height);
		this.trippingball6 = new TrippingBall (this.ballRadius*3, this.width, this.height);
		this.trippingball7 = new TrippingBall (this.ballRadius*3.5, this.width, this.height);

		this.paddleOne = new Paddle(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			this.boardGap, 
			(this.height-this.paddleHeight)/2,
			KEYS.a,
			KEYS.z,
			KEYS.f
		);
		
		this.paddleTwo = new Paddle(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			(this.width-this.boardGap-this.paddleWidth), 
			(this.height-this.paddleHeight)/2,
			KEYS.up,
			KEYS.down,
			KEYS.enter
		);
		
		this.scoreOne = new Score(this.width/2-20, 30, 30, 'end');
		this.scoreTwo = new Score(this.width/2+20, 30, 30, 'start');

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
		

		//hide the original ball when score reaches 5 and generate TRIPPING balls
		if (this.paddleOne.score < 5 && this.paddleTwo.score < 5){
			this.ball.render(svg, this.paddleOne, this.paddleTwo);
		}
		else {
			this.trippingball1.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball2.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball3.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball4.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball5.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball6.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball7.render(svg,this.paddleOne, this.paddleTwo);

			let text = document.getElementsByClassName('text')[0];
			text.setAttribute('id','text');

		}


		this.scoreOne.render(svg,this.paddleOne.score);
		this.scoreTwo.render(svg, this.paddleTwo.score);
		
		
	}
	
}