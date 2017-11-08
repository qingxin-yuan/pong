import {SVG_NS, paddleSpeed} from '../settings';

export default class Paddle{
  
  constructor(boardHeight, width, height, x, y, upKey, downKey, fireKey){
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.upKey = upKey;
    this.downKey = downKey;
    this.fireKey = fireKey;
    
    this.upPressed = false;
    this.downPressed = false;
    this.fireKeyPressed = false;
    
    this.speed = paddleSpeed;//paddle moving speed
    this.score = 0;//property for keeping score of the paddle
    this.goal = false;//property for goal detection 
    
    
    //EVENTLISTENER FOR PADDLE MOVEMENT CONTROL AND FIRE SHOT CONTROL
    //jquery equivelant of .on
    document.addEventListener('keydown', event => {//key pressed listner
      // event.preventDefault();
      switch(event.key){
        case this.upKey: 
        this.upPressed = true;
        break;
        case this.downKey:
        this.downPressed = true;
        break;
        case this.fireKey:
        this.fireKeyPressed = true;
      }
    });
    
    document.addEventListener('keyup', event => {//key pressed listner
      // event.preventDefault();
      switch(event.key){
        case this.upKey: 
        this.upPressed = false;
        break;
        case this.downKey:
        this.downPressed = false;
        break;
      }
    });
    
  }
  
  //METHOD TO CALCULATE COORDINATES OF 4 EDGES OF THE PADDLE
  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return {leftX, rightX, topY, bottomY};
  }
  
  //METHOD FOR PADDLE  UP MOVEMENT WITHIN BOUNDARIES
  up(){
    //get max number
    //either 0 or the y position of the paddle
    this.y = Math.max((this.y-this.speed), 0);
    
  }
  //METHOD FOR PADDLE DOWN MOVEMENT WITHIN BOUNDARIES
  down(){
    //get the min number
    //either height of the board minus the height of the paddle or the y position plus the speed
    this.y = Math.min((this.y + this.speed),(this.boardHeight-this.height));
  }
  
  render(svg){
    let rect = document.createElementNS(SVG_NS,'rect');
    
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', '#D3D3D3');
    svg.appendChild(rect);
    
    //ACHIEVING PADDLE SMOOTH MOVEMENT USING KEYUP & KEYDOWN
    if (this.upPressed){
      this.up();
    }
    if(this.downPressed){
      this.down();
    }
  }
}