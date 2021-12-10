import { EntityInterface } from "../Utils/Interfaces";
import { AnimationObjectCreate } from "./AnimationObjectCreate";
import { SpriteAnimator } from "./SpriteAnimator";
import tear from "../../Img/one_tear.png"
export class Tear implements EntityInterface{
    vx: number;
    vy: number;
    imageSource: SpriteAnimator;
    hitboxWidth: number;
    hitboxHeight: number;
    width: number;
    height: number;
    x: number;
    y: number;

    constructor() {
        this.vx=0.05
        this.vy=0
        this.imageSource=new SpriteAnimator([new AnimationObjectCreate(tear,66,66,true,0,0,"tear",0,0)])
        this.hitboxHeight = 10
        this.hitboxWidth = 10
        this.width = this.imageSource.spriteWidth - 40
        this.height = this.imageSource.spriteHeight - 40
        this.x= 100
        this.y=100
    }
    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
    }
    update(delta: number): void {
        this.x += delta * this.vx
        this.y += delta * this.vy

        this.imageSource.update(delta)
    }

}