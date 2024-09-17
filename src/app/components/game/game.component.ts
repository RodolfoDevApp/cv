import { Component, Renderer2, HostListener, ElementRef, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { animationStates } from 'src/app/models/animationStates';
import { gameElement } from 'src/app/models/character';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, AfterViewInit {

  // gameElements: GameElement[] = [];
  frame:number = 0;
  spriteSheetsPlayer: animationStates[] = [];
  player: gameElement | undefined;
  @ViewChild('gameContainer', { static: true }) canvas: ElementRef<HTMLCanvasElement> | null = null;
  private ctx: CanvasRenderingContext2D | null = null;


  constructor(private renderer: Renderer2, private elementRef: ElementRef, private cdr: ChangeDetectorRef) {
    
    this.spriteSheetsPlayer.push(new animationStates("idle",10,"../../../assets/sprites/Player_Sword_Idle4_8x48.png",480,48,48,48));
    this.spriteSheetsPlayer.push(new animationStates("run",8,"../../../assets/sprites/Player_Sword_Run_48x48.png",384,48,48,48));
    this.spriteSheetsPlayer.push(new animationStates("jump",8,"../../../assets/sprites/player_air_spin_48x48.png",288,48,48,48));
    this.spriteSheetsPlayer.push(new animationStates("attack",6,"../../../assets/sprites/player_sword_atk_64x64.png",384,64,64,64));
    this.spriteSheetsPlayer.push(new animationStates("fall",3,"../../../assets/sprites/player_jump_48x48.png",144,48,48,48));
    this.spriteSheetsPlayer.push(new animationStates("roll",7,"../../../assets/sprites/Player_Roll_48x48.png",480,48,48,48));
   
  }

  ngOnInit(): void {

    this.gameLoop();
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      
      
  this.cdr.detectChanges();
});
}
gameLoop() {
  if (this.canvas) {
    let action = 'idle';
    const sheet = this.spriteSheetsPlayer.find(e => e.action === action);
    let x = 0;
    let y= 0;
    if (this.frame < sheet!.frames) {
     x = sheet!.positions[this.frame].x 
     y = sheet!.positions[this.frame].y
     this.frame ++
    }else{
      this.frame = 0;
    }

    const canvasElement: HTMLCanvasElement = this.canvas.nativeElement;
this.ctx = canvasElement.getContext('2d');
// this.ctx = this.canvas.nativeElement.getContext('2d');
this.player = new gameElement(10,10,"player",10);
this.player.draw(canvasElement,sheet!.spriteSheetUrl,this.canvas.nativeElement.width,this.canvas.nativeElement.height,x,y);
}
    requestAnimationFrame(() => this.gameLoop());
  }

 

    
}

