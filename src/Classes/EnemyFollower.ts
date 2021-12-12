import { FaceEnemy } from "../Utils/FaceEnemy";
import { SpriteAnimator } from "./SpriteAnimator";
import enemy_follower from "../../Img/enemy_follower.png"
import { AnimationObjectCreate } from "./AnimationObjectCreate";

export class EnemyFollower extends FaceEnemy{

    constructor(x:number,y:number) {
        super(0,0.2,0.2,new SpriteAnimator([new AnimationObjectCreate(enemy_follower,32,22,false,9,32,"walkDown",75),new AnimationObjectCreate(enemy_follower,32,22,false,9,32,"walkLeft",448,5),
        new AnimationObjectCreate(enemy_follower,32,22,false,9,32,"walkUp",405),new AnimationObjectCreate(enemy_follower,32,22,false,9,32,"walkRight",118)]),x,y,10)

        this.headSource = new SpriteAnimator([new AnimationObjectCreate(enemy_follower,39,34,true,0,40,"static",20,4)])
        this.headHeight = this.headSource.spriteHeight + 40
        this.headWidth = this.headSource.spriteWidth+ 40
        this.width = this.width + 20
        this.height = this.height +20
        this.hitboxHeight = this.headSource.spriteHeight+this.imageSource.spriteHeight
        this.hitboxWidth = this.headSource.spriteWidth
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        super.draw(ctx)
        this.headSource.draw(ctx,this.x-9,this.y-46,this.headWidth,this.headHeight)

    }

    update(delta: number,playerX:number,playerY:number): void {
        super.update(delta,playerX,playerY)
        this.headSource.update(delta)
        super.updateHitboxPosition(5,-this.headSource.spriteHeight)

        if(this.movementObject.DOWN) this.imageSource.update(delta,"walkDown")
        else if(this.movementObject.UP) this.imageSource.update(delta,"walkUp")
        else if(this.movementObject.LEFT) this.imageSource.update(delta,"walkLeft")
        else if(this.movementObject.RIGHT) this.imageSource.update(delta,"walkRight")
    }
}