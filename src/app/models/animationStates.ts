export class animationStates {
    action: string;
    frames: number;
    positions: position[];
    spriteSheetUrl: string;
    spriteSheetWidth: number;
    spriteSheetHeigth: number;
    spriteWidth: number;
    spriteHeigth: number;
    constructor(action: string, frames: number, spriteSheetUrl: string, spriteSheetWidth: number, spriteSheetHeigth: number, spriteWidth: number, spriteHeigth: number) {
        this.action = action;
        this.frames = frames;
        this.spriteSheetUrl = spriteSheetUrl;
        this.spriteSheetWidth = spriteSheetWidth;
        this.spriteSheetHeigth = spriteSheetHeigth;
        this.spriteWidth = spriteWidth;
        this.spriteHeigth = spriteHeigth;
        this.positions = this.getPositions();
    }


    getPositions() {
        let heightSheet = Math.floor(this.spriteSheetHeigth / this.spriteHeigth);

        let auxArr: position[] = [];
        for (let j = 0; j < heightSheet; j++) {
            for (let index = 0; index <= this.frames; index++) {
                let aux: position = { x: (index * this.spriteWidth), y: (j * this.spriteHeigth) };
                auxArr.push(aux);//ahorita le dejo 0 porque mis sprite sheets son de una sola dimension            
            }
        }
        return auxArr;
    }
}

interface position {
    x: number;
    y: number;
}