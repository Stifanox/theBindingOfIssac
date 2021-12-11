import { Enemy } from "./Enemy";
import enemy_follower from "../../Img/enemy_follower.png"
import { SpriteAnimator } from "./SpriteAnimator";
import { AnimationObjectCreate } from "./AnimationObjectCreate";
import { Actions, FaceEntity } from "../Utils/Interfaces";

export class EnemyFollower extends Enemy implements FaceEntity{

    headSource: SpriteAnimator;
    headWidth: number;
    headHeight: number;
    movementObject: Actions;

    constructor() {
        super(0.1,0.1,new SpriteAnimator([new AnimationObjectCreate(enemy_follower,32,22,false,9,32,"walkDown",75),new AnimationObjectCreate(enemy_follower,32,22,false,9,32,"walkLeft",448,5),
        new AnimationObjectCreate(enemy_follower,32,22,false,9,32,"walkUp",405),new AnimationObjectCreate(enemy_follower,32,22,false,9,32,"walkRight",118)]),700,200,10)

        this.headSource = new SpriteAnimator([new AnimationObjectCreate(enemy_follower,39,34,true,0,40,"static",20,4)])
        this.headHeight = this.headSource.spriteHeight + 40
        this.headWidth = this.headSource.spriteWidth + 40
        this.movementObject ={
            UP:false,
            DOWN:false,
            LEFT:false,
            RIGHT:false,
        }
    }
    
    draw(ctx?: CanvasRenderingContext2D): void {
        super.draw(ctx)
    }

    update(delta: number): void {
        super.update(delta)
        this.imageSource.update(delta,"walkLeft")
        this.x -= delta* this.vx

        this.updateHitboxPosition()
    }
}