import { SpriteAnimator } from "../Classes/SpriteAnimator";
import { Enemy } from "./Enemy";
import { FaceEntity } from "./Interfaces";
import { PlayfieldSize } from "./PlayfiledSize";

export abstract class FaceEnemy extends Enemy implements FaceEntity{
    headSource: SpriteAnimator;
    headWidth: number;
    headHeight: number;
    offsetOfBottomSize:number
    multi:number

    constructor(offsetOfBottomSize:number,vx: number, vy: number, imageSource: SpriteAnimator, x: number, y: number, health:number) {
        super(vx,vy,imageSource,x,y,health)
        this.offsetOfBottomSize=offsetOfBottomSize
        this.multi = vx
    }
    


    // update(delta:number): void;
    update(delta: number,playerX?:number,playerY?:number): void {
        this.howToMove(playerX,playerY);

        (this.canMove.LEFT && this.vx<0) || (this.canMove.RIGHT && this.vx>0) && this.x+this.offsetOfBottomSize < PlayfieldSize.upperX  ? this.x += delta*this.vx : null;
        (this.canMove.UP && this.vy<0) || (this.canMove.DOWN && this.vy>0) && this.y+this.offsetOfBottomSize < PlayfieldSize.downY ? this.y += delta*this.vy:null

        super.update(delta)
    }

    protected howToMove(playerX:number,playerY:number){
        const angle = Math.atan2(playerY - this.y,playerX - this.x) 

        this.vx = Math.cos(angle) * this.multi
        this.vy = Math.sin(angle) * this.multi

        if(Math.abs(this.vx) > Math.abs(this.vy)){
            if(this.vx < 0 ){
                this.movementObject.LEFT = true
                this.movementObject.RIGHT = false
                this.movementObject.UP = false
                this.movementObject.DOWN = false
            }else{
                this.movementObject.LEFT = false
                this.movementObject.RIGHT = true
                this.movementObject.UP = false
                this.movementObject.DOWN = false
            }
        }
        else{
            if(this.vy < 0 ){
                this.movementObject.LEFT = false
                this.movementObject.RIGHT = false
                this.movementObject.UP = true
                this.movementObject.DOWN = false
            }else{
                this.movementObject.LEFT = false
                this.movementObject.RIGHT = false
                this.movementObject.UP = false
                this.movementObject.DOWN = true
            }
        }
       
        
    }
}