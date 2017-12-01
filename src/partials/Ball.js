import {boardGap, paddleWidth} from '../settings'

//BASIC BALL CLASS
export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio('public/sounds/pong-03.wav');

  }
  
  initialization(){
    this.x = this.boardWidth/2;
    this.y = this.boardHeight/2;

    this.randomSpeed();
  }

  randomSpeed(){
    
    //GENERATE RANDOM SPEED FOR THE BALL - VX & VY
    //vy random number b/w (-5, 5)
    this.vy = 0;
    while (this.vy===0){
      this.vy = Math.floor(Math.random() * 10 - 5); 
    }
    //set vx accordingly, use 6 to avoide vx being 0
    this.vx = this.direction * (6 - Math.abs(this.vy));
    
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

  //METHOD FOR COUNTING GOAL FOR THE PADDLE
  goal(paddle){
    paddle.score++;
    paddle.goal = true;

  }
  
  
  render(svg, paddle1, paddle2){
    this.y = this.y + this.vy;
    this.x = this.x + this.vx;
    
    this.wallCollision(paddle1,paddle2);
    this.paddleCollision(paddle1, paddle2);  
  }
}