import { Actions, EntityInterface } from "../../Utils/Interfaces";
import { AnimationObjectCreate } from "../Animation/AnimationObjectCreate";
import { SpriteAnimator } from "../Animation/SpriteAnimator";
import { ImgSpikes } from "../../Importer/ImageImporter"

export class Spikes implements EntityInterface  {
    
    vx: number;
    vy: number;
    imageSource: SpriteAnimator;
    width: number;
    height: number;
    canMove?: Actions;
    x: number;
    y: number;
    hitboxWidth: number;
    hitboxHeight: number;
    hitboxX: number;
    hitboxY: number;

    constructor(x:number,y:number) {
        this.x = x
        this.y = y
        this.imageSource = new SpriteAnimator([new AnimationObjectCreate(ImgSpikes,23,28,true,0,0,"static",0,0)])
        this.width = 50
        this.height = 50
        this.hitboxX= this.x
        this.hitboxY = this.y
        this.hitboxWidth = this.width
        this.hitboxHeight = this.height
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
    }
    update(delta: number): void {}
}