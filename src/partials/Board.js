import {SVG_NS} from '../settings';

export default class Board{
  
  constructor(width, height){
    
    this.width = width;
    this.height = height;
    
  }
  
  render(svg){
    let rect = document.createElementNS(SVG_NS,'rect');
    
    rect.setAttributeNS(null, 'x', '0');
    rect.setAttributeNS(null, 'y', '0');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', '#353535');
    svg.appendChild(rect);
    
    let line = document.createElementNS(SVG_NS, 'line');
    
    line.setAttributeNS(null, 'x1', this.width/2);
    line.setAttributeNS(null, 'x2', this.width/2);
    line.setAttributeNS(null, 'y1', 0);
    line.setAttributeNS(null, 'y2', this.height);
    line.setAttributeNS(null, 'stroke', '#666600');
    line.setAttributeNS(null, 'stroke-dasharray', '15,15');
    line.setAttributeNS(null, 'stroke-width', '3');
    
    svg.appendChild(line);
    
  }
  
}