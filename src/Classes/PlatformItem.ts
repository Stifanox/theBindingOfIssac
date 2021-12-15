import { Actions, EntityInterface } from "../Utils/Interfaces";
import { AnimationObjectCreate } from "./AnimationObjectCreate";
import { SpriteAnimator } from "./SpriteAnimator";
import platform_item from "../../Img/platform_item.png"
export class PlatformItem implements EntityInterface{
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
        this.imageSource = new SpriteAnimator([new AnimationObjectCreate(platform_item,407,361,true,0,0,"static",0,0)])
        this.width = this.imageSource.spriteWidth -350
        this.height = this.imageSource.spriteHeight -310
        this.x=x
        this.y = y
        this.hitboxHeight = this.height
        this.hitboxWidth = this.width
        this.hitboxX = this.x
        this.hitboxY = this.y
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
    }
    update(delta: number): void {}
    
}