import {SVG_NS, boardGap, paddleWidth} from '../settings'
import Ball from './Ball'

//SIMILAR CLASS AS IN BALL.JS BUT WITH A FEW TWEAKS FOR RESET AND RANDOM COLOR METHOD
export default class TrippingBall extends Ball{

  constructor(radius, boardWidth, boardHeight){
    super(radius, boardWidth, boardHeight);
    this.reset();
  }
  
  reset(){
    //GENERATE RANDOM DIRECTION (-1 OR 1) TRIPPING BALL
    this.direction = 0
    while (this.direction === 0){
      this.direction = Math.floor(Math.random()*3) -1;
    }
    //GENERATE RANDOM APPEARING LOCATION OF THE TRIPPING BALL
    this.x = boardGap + paddleWidth+ this.radius+Math.random() * (this.boardWidth - 2*boardGap - 2*paddleWidth - 2*this.radius);
    this.y = Math.random() * (this.boardHeight - 2*this.radius)+this.radius;
    
    super.reset();
  
  }

//METHOD FOR WALL COLLISION OF THE BALL, WITH GOAL CALCULATION AND BALL POSITION RESET AFTER GOAL
wallCollision(paddle1,paddle2){
  const hitLeft = (this.x - this.radius) <= 0;
  const hitRight = (this.x + this.radius) >= this.boardWidth;
  const hitTop = (this.y - this.radius) <=0;
  const hitBottom = (this.y + this.radius) >= this.boardHeight;
  
  if (hitLeft){
    this.direction = -1;
    this.goal(paddle2);
    // this.pong.play();
    
    // this.resetAfterGoal(paddle1,paddle2);
    this.reset();
  }
  else if (hitRight){
    this.direction = 1;
    this.goal(paddle1);
    // this.pong.play();
    
    // this.resetAfterGoal(paddle1,paddle2);
    this.reset();
  }
  else if (hitTop || hitBottom){
    this.vy = -this.vy;
  }
}

  //GENERATE RANDOM COLORS FOR THE TRIPPING BALL
  randomColor(){
    let color = '#',
    chars = '0123456789ABCDEF'.split('');
    for (let i = 0; i < 6; i++){
      color += chars[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }
  
  render(svg, paddle1, paddle2){

    super.render(svg, paddle1, paddle2);
    
    let circle = document.createElementNS(SVG_NS,'circle');
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'cx',this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    // circle.setAttributeNS(null, 'fill', this.randomColor());
    circle.setAttributeNS(null, 'id', 'trippingBall');
    
    svg.appendChild(circle);
    
  }
}