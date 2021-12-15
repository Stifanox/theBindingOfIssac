import { FlyingEnemy } from "../Utils/FlyingEnemy";
import { AnimationObjectCreate } from "./AnimationObjectCreate";
import { SpriteAnimator } from "./SpriteAnimator";
import enemy_baby from "../../Img/enemy_baby.png"
import { PlayfieldSize } from "../Utils/PlayfiledSize";

//FIXME: jak zrealizować strzelanie
export class EnemyBaby extends FlyingEnemy{
    
    offsetOfBottomSize:number
    constructor(x:number,y:number) {
        super(0.01,0.01,x,y,10,new SpriteAnimator([new AnimationObjectCreate(enemy_baby,25,33,true,0,0,"static",0,20)]))
        this.offsetOfBottomSize = 20
        this.width=40
        this.height=55
        this.hitboxWidth = this.width
        this.hitboxHeight = this.height
    }

    update(delta: number, playerX?: number, playerY?: number): void {
        super.update(delta,playerX,playerY)
        this.howToMove(playerX,playerY);

        (this.canMove.LEFT && this.vx<0) || (this.canMove.RIGHT && this.vx>0) && this.x+this.offsetOfBottomSize < PlayfieldSize.upperX  ? this.x += delta*this.vx : null;
        (this.canMove.UP && this.vy<0) || (this.canMove.DOWN && this.vy>0) && this.y+this.offsetOfBottomSize < PlayfieldSize.downY ? this.y += delta*this.vy:null

        this.updateHitboxPosition(0,0)
    }

    protected howToMove(playerX:number,playerY:number){
        const angle = Math.atan2(playerY - this.y,playerX - this.x) 

        this.vx = Math.cos(angle) * 0.01
        this.vy = Math.sin(angle) * 0.01

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