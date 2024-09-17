import { animationStates } from "./animationStates";

export class gameElement {
  x: number;
  y: number;
  type: string;
  width: number;
  constructor(x: number, y: number, type: string, width: number) {
    this.type = type
    this.x = x;
    this.y = y
    this.width = width;
  }

  draw(element: HTMLCanvasElement, spriteSheeturl: string,canvasWidth: number, canvasHeight: number,sheetPositionX:number,sheetPositionY:number) {

    const spriteImg = new Image();
    spriteImg.src = spriteSheeturl;
    const ctx = element.getContext('2d');
   
      
      //cordinates and dimensions on the sprite sheet
      let sx = sheetPositionX //x coordination on the sprite sheet
      console.log(sx)
      let sy = sheetPositionY//Y coordination on the sprite sheet
      let sWidth = 48 //width of the sprite sheet
      let sHeight = 48 //height of the sprite sheet
  
      // Coordinates and dimensions on the canvas
      const dx = 0; // X coordinate on the canvas
      const dy = 0; // y coordinate on the canvas
      const dWidth = 48; // width of the sprite on the canvas
      const dHeight = 48; // height of the sprites on the canvas
  
      if (ctx) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        ctx.drawImage(spriteImg, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  
      }
 
  }

}