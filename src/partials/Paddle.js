import {SVG_NS} from '../settings';

export default class Paddle{
  
  constructor(boardHeight, width, height, x, y, keyUp, keyDown){
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.keyUp = keyUp;
    this.keyDown = keyDown;

    this.upPressed = false;
    this.downPressed = false;

    this.speed = 5;//change during the weekend
    this.score = 0;

    //jquery equivelant of .on
    document.addEventListener('keydown', event => {//key pressed listner
      event.preventDefault();
      switch(event.key){
        case this.keyUp: 
          this.upPressed = true;
        break;
        case this.keyDown:
          this.downPressed = true;
        break;
      }
    });

    document.addEventListener('keyup', event => {//key pressed listner
      event.preventDefault();
      switch(event.key){
        case this.keyUp: 
          this.upPressed = false;
        break;
        case this.keyDown:
          this.downPressed = false;
        break;
      }
    });

  }
  
  //method to calculate coordinates of the paddle
  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return {leftX, rightX, topY, bottomY};
  }
  
  up(){
    //get max number
    //either 0 or the y position of the paddle
    this.y = Math.max((this.y-this.speed), 0);

  }
  
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

    if (this.upPressed){
      this.up();
    }
    if(this.downPressed){
      this.down();
    }

    
  }
}