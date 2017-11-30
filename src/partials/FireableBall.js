import {SVG_NS, boardGap, paddleWidth} from '../settings'
import Ball from './Ball'

export default class FireableBall extends Ball {
  
  constructor(radius, boardWidth, boardHeight){

    super(radius, boardWidth, boardHeight);
    this.pong = new Audio('public/sounds/pong-04.wav');

    this.reset();
  }

  reset(){
    super.reset();

    this.x = this.boardWidth/2;
    this.y = this.boardHeight/2;
  }

  //METHOD FOR PADDLE COLLISION DETECTION
  //fixed the bug that when ball resets at the edge of paddle, ball keeps bouncing
  paddleCollision(paddle1, paddle2){
    if (this.vx > 0 && !paddle1.goal) {
      
      // detect paddle collision on the right side (paddle2)
      let paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
      let {leftX, topY, bottomY} = paddle;
      
      if (
        (this.x+this.radius >= leftX) && (this.y >= topY ) && (this.y <= bottomY)
      ){
        this.vx = -this.vx;
        this.ping.play();
      }
    } 
    
    else if (this.vx < 0 && !paddle2.goal){
      //detect paddle collision on the left side (paddle1)
      let paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
      let {rightX, topY, bottomY} = paddle;//let variables only exist within this block
      
      if(
        (this.x-this.radius <= rightX) && (this.y >= topY) && (this.y <= bottomY)
      ){
        this.vx = -this.vx;
        this.ping.play();
      }
      
    }
    
  }

  //METHOD TO RESET THE BALL AT WINNER'S SIDE OF THE PADDLE
  resetAfterGoal(paddle1,paddle2){
    if (paddle1.goal){
      this.x = boardGap + paddleWidth + this.radius;
      //calling coordinates method in paddle class to get the current y position of the paddle
      let paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
      let {topY, bottomY} = paddle;
      this.y = (topY + bottomY)/2;
    }
    else if (paddle2.goal){
      this.x = this.boardWidth - boardGap - paddleWidth - this.radius;
      let paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
      let {topY, bottomY} = paddle;
      this.y = (topY + bottomY)/2;
    }
    
  }
  

  //METHOD FOR FIRING THE BALL WHEN FIREKEY PRESSED
  fireShot(paddle1,paddle2){
    //generate speed when there's a goal on either side
    if (paddle1.goal && paddle1.fireKeyPressed){
      
      while (this.vy===0){
        this.vy = Math.floor(Math.random() * 10 - 5); 
      }
      //set vx accordingly, use 6 to avoide vx being 0
      this.vx = this.direction * (6 - Math.abs(this.vy));
      
      paddle1.fireKeyPressed = false;
      paddle1.goal = false;
    } 
    else if (paddle2.goal && paddle2.fireKeyPressed){
      while (this.vy===0){
        this.vy = Math.floor(Math.random() * 10 - 5); 
      }
      //set vx accordingly, use 6 to avoide vx being 0
      this.vx = this.direction * (6 - Math.abs(this.vy));
      
      paddle2.fireKeyPressed = false;
      paddle2.goal = false;
    }
    //moves the ball along with the paddle, yet with no bouncing until firekey is pressed
    else if (paddle1.goal){
      
      this.vx = 0;
      this.vy = 0;
      
      let paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
      let {topY, bottomY} = paddle;
      this.y = (topY + bottomY)/2;
    }
    else if (paddle2.goal){
      this.vx = 0;
      this.vy = 0;
      
      let paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
      let {topY, bottomY} = paddle;
      this.y = (topY + bottomY)/2;
    }
  }

  render(svg,paddle1, paddle2){

    super.render(svg,paddle1, paddle2);

    let circle = document.createElementNS(SVG_NS,'circle');
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'cx',this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null, 'fill', '#ffffff');
    
    svg.appendChild(circle);
    this.fireShot(paddle1,paddle2);
  }

}