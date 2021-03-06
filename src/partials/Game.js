import {SVG_NS, KEYS, boardGap, paddleWidth, paddleHeight, ballRadius} from '../settings'
import Board from './Board'
import Paddle from './Paddle'
import FireableBall from './FireableBall'
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
		
		//GRAB THE #GAME ELEMENT IN HTML
		this.gameElement = document.getElementById(this.element);

		//INSTANTIATE OBJECTS FROM EACH CLASS ACCORDINGLY
		this.board = new Board(this.width, this.height);
		
		this.ball = new FireableBall(this.ballRadius, this.width, this.height);
		
		this.trippingball1 = new TrippingBall (this.ballRadius*2, this.width, this.height);
		this.trippingball2 = new TrippingBall (this.ballRadius*0.7, this.width, this.height);
		this.trippingball3 = new TrippingBall (this.ballRadius*1.2, this.width, this.height);
		this.trippingball4 = new TrippingBall (this.ballRadius*2.5, this.width, this.height);
		this.trippingball5 = new TrippingBall (this.ballRadius, this.width, this.height);
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

		//ADD EVENTLISTENER FOR PAUSING THE GAME USING SPACE BAR
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

		//AFTER EITHER GOAL REACHES 5, 7 TRIPPING BALLS ARE TRIGGERED, APPEARING RANDOMLY ON THE GAME BOARD
		if (this.paddleOne.score < 2 && this.paddleTwo.score < 2){
			this.ball.render(svg, this.paddleOne, this.paddleTwo);
		}
		else if (this.paddleOne.score < 10 && this.paddleTwo.score < 10){
			this.trippingball1.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball2.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball3.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball4.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball5.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball6.render(svg,this.paddleOne, this.paddleTwo);
			this.trippingball7.render(svg,this.paddleOne, this.paddleTwo);

			//ANIMATE TEXT AND CHANGE BACKGROUND COLOR WHEN TRIPPING BALLS ARE TRIGGERED
			document.getElementsByClassName('text')[0].setAttribute('class','text text-tripping');
			document.querySelector('body').setAttribute('style', 'background: #6b8e23');
		}
		else{
			return;
			//delete text "let's get tripping"
			
			// return;
			// let endText = document.createElement('')
			// document.getElementById('game').;
		}


		this.scoreOne.render(svg,this.paddleOne.score);
		this.scoreTwo.render(svg, this.paddleTwo.score);
		
		
	}
	
}