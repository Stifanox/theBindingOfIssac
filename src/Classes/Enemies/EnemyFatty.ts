import { FaceEnemy } from "../../Utils/FaceEnemy";
import { AnimationObjectCreate } from "../Animation/AnimationObjectCreate";
import { SpriteAnimator } from "../Animation/SpriteAnimator";
import { ImgFattyEnemy } from "../../Importer/ImageImporter";

export class EnemyFatty extends FaceEnemy {

    constructor(x: number, y: number) {
        super(40, 0.05, 0.05, new SpriteAnimator([new AnimationObjectCreate(ImgFattyEnemy, 64, 38, false, 11, 64, "walkLeft", 109, 0), new AnimationObjectCreate(ImgFattyEnemy, 64, 38, false, 11, 64, "walkRight", 49, 0), new AnimationObjectCreate(ImgFattyEnemy, 64, 38, false, 11, 64, "walkDown", 175, 0)]), x, y, 30)

        this.headSource = new SpriteAnimator([new AnimationObjectCreate(ImgFattyEnemy, 32, 32, false, 5, 32, "headPlay", 0, 0)])
        this.width += 50
        this.height += 50
        this.headHeight = this.headSource.spriteHeight + 30
        this.headWidth = this.headSource.spriteWidth + 30
        this.hitboxHeight = this.headSource.spriteHeight + this.imageSource.spriteHeight
        this.hitboxWidth = this.headWidth
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        super.draw(ctx)
        this.headSource.draw(ctx, this.x + 25, this.y - 20, this.headWidth, this.headHeight)
    }

    update(delta: number, playerX?: number, playerY?: number): void {
        super.update(delta, playerX, playerY)
        super.updateHitboxPosition(25, 0)
        this.headSource.update(delta, "headPlay")


        if (this.movementObject.DOWN) this.imageSource.update(delta, "walkDown")
        else if (this.movementObject.UP) this.imageSource.update(delta, "walkDown")
        else if (this.movementObject.LEFT) this.imageSource.update(delta, "walkLeft")
        else if (this.movementObject.RIGHT) this.imageSource.update(delta, "walkRight")
    }
}