import {SVG_NS, boardGap, paddleWidth} from '../settings'

export default class TrippingBall {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio('public/sounds/pong-03.wav');

    this.reset();
    
  }

  reset(){
    this.direction = 0
    while (this.direction === 0){
      this.direction = Math.floor(Math.random()*3) -1;
    }
    this.x = boardGap + paddleWidth+ this.radius+Math.random() * (this.boardWidth - 2*boardGap - 2*paddleWidth - 2*this.radius);
    this.y = Math.random() * (this.boardHeight - 2*this.radius)+this.radius;
    
    //MODIFY THIS DURING THE WEEKEND
    //vy random number b/w (-5, 5)
    this.vy = 0;
    while (this.vy===0){
      this.vy = Math.floor(Math.random() * 10 - 5); 
    }
    //set vx accordingly, use 6 to avoide vx being 0
    this.vx = this.direction * (6 - Math.abs(this.vy));

  }
  
  wallCollision(paddle1,paddle2){
    const hitLeft = (this.x - this.radius) <= 0;
    const hitRight = (this.x + this.radius) >= this.boardWidth;
    const hitTop = (this.y - this.radius) <=0;
    const hitBottom = (this.y + this.radius) >= this.boardHeight;
    
    if (hitLeft){
      this.direction = -1;
      this.goal(paddle2);
      this.reset();
    }
    else if (hitRight){
      this.direction = 1;
      this.goal(paddle1);
      this.reset();
      
    }
    else if (hitTop || hitBottom){
      this.vy = -this.vy;
    }
  }
  
  paddleCollision(paddle1, paddle2){
    if (this.vx > 0) {
      
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
    
    else{
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

  goal(paddle){
    paddle.score++;
    paddle.goal = true;
  }
  
  
  render(svg, paddle1, paddle2){
    this.y = this.y + this.vy;
    this.x = this.x + this.vx;
    
    let circle = document.createElementNS(SVG_NS,'circle');
    let trippingColor = '';
    
    let randomColor = function () {
      let color = '#';
      let chars = '0123456789ABCDEF'.split('');
      for (var i = 0; i < 6; i++){
        color += chars[Math.floor(Math.random() * 16)];
      }
      
      return color;
    };

    trippingColor = randomColor();


    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'cx',this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null, 'fill', trippingColor);
    circle.setAttributeNS(null, 'id', 'trippingBall');

    
    // tripping.setAttributeNS(null, 'begin','0s');
    
    svg.appendChild(circle);
    this.wallCollision(paddle1,paddle2);
    this.paddleCollision(paddle1, paddle2);
    // svg.appendChild(tripping);
    // if (this.bool){
    //   this.animation();
    //   this.bool = false;
    // }
  }
}