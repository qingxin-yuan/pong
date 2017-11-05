import {SVG_NS, boardGap, paddleWidth} from '../settings'

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio('public/sounds/pong-03.wav');
    this.pong = new Audio('public/sounds/pong-04.wav')
    
    this.reset();
  }
  
  reset(){
    this.x = this.boardWidth/2;
    this.y = this.boardHeight/2;
    
    //MODIFY THIS DURING THE WEEKEND
    //vy random number b/w (-5, 5)
    this.vy = 0;
    while (this.vy===0){
      this.vy = Math.floor(Math.random() * 10 - 5); 
    }
    //set vx accordingly, use 6 to avoide vx being 0
    this.vx = this.direction * (6 - Math.abs(this.vy));
    
  }
  
  resetAfterGoal(paddle1,paddle2){
    if (paddle1.goal){
      this.x = boardGap + paddleWidth + this.radius;
      // this.y = paddle1.y + 0.5 * paddle1.height;
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
  
  wallCollision(paddle1,paddle2){
    const hitLeft = (this.x - this.radius) <= 0;
    const hitRight = (this.x + this.radius) >= this.boardWidth;
    const hitTop = (this.y - this.radius) <=0;
    const hitBottom = (this.y + this.radius) >= this.boardHeight;
    
    if (hitLeft){
      this.direction = -1;
      this.goal(paddle2);
      this.pong.play();
      
      this.resetAfterGoal(paddle1,paddle2);
    }
    else if (hitRight){
      this.direction = 1;
      this.goal(paddle1);
      this.pong.play();
      
      this.resetAfterGoal(paddle1,paddle2);
    }
    else if (hitTop || hitBottom){
      this.vy = -this.vy;
    }
  }
  
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
  
  fireShot(paddle1,paddle2){

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
    else if (paddle1.goal){
      //keep the ball static until fireKey is pressed
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

  goal(paddle){
    paddle.score++;
    paddle.goal = true;
    // console.log(paddle.goal);
  }
  
  
  render(svg, paddle1, paddle2){
    this.y = this.y + this.vy;
    this.x = this.x + this.vx;
    
    this.wallCollision(paddle1,paddle2);
    this.paddleCollision(paddle1, paddle2);
    this.fireShot(paddle1,paddle2);

    let circle = document.createElementNS(SVG_NS,'circle');
    
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'cx',this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null, 'fill', '#ffffff');
    
    svg.appendChild(circle);
  }
}