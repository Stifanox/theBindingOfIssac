import { FlyingEnemy } from "../Utils/FlyingEnemy";
import { AnimationObjectCreate } from "./AnimationObjectCreate";
import { SpriteAnimator } from "./SpriteAnimator";
import enemy_fly from "../../Img/enemy_fly.png"
import { PlayfieldSize } from "../Utils/PlayfiledSize";
export class EnemyFly extends FlyingEnemy{
    
    offsetOfBottomSize:number
    constructor(x:number,y:number){
        super(0.1,0.1,x,y,10,new SpriteAnimator([new AnimationObjectCreate(enemy_fly,54,49,false,3,64,"flying",84,32)]))
        this.offsetOfBottomSize= 0
    }

    update(delta: number, playerX?: number, playerY?: number): void {
        super.update(delta,playerX,playerY)
        super.updateHitboxPosition(-5,-5);
        this.howToMove(playerX,playerY);
        (this.canMove.LEFT && this.vx<0) || (this.canMove.RIGHT && this.vx>0) && this.x+this.offsetOfBottomSize < PlayfieldSize.upperX  ? this.x += delta*this.vx : null;
        (this.canMove.UP && this.vy<0) || (this.canMove.DOWN && this.vy>0) && this.y+this.offsetOfBottomSize < PlayfieldSize.downY ? this.y += delta*this.vy:null

        this.imageSource.update(delta,"flying")

    }

    protected howToMove(playerX:number,playerY:number){
        const angle = Math.atan2(playerY - this.y,playerX - this.x) 

        this.vx = Math.cos(angle) * 0.1
        this.vy = Math.sin(angle) * 0.1

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