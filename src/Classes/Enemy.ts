import { EntityInterface, FaceEntity } from "../Utils/Interfaces";
import { SpriteAnimator } from "./SpriteAnimator";

//TODO: zrobić klasę faceEnemy
export class Enemy implements EntityInterface{
    vx: number;
    vy: number;
    imageSource: SpriteAnimator;
    hitboxWidth: number;
    hitboxHeight: number;
    width: number;
    height: number;
    x: number;
    y: number;

    constructor(vx: number, vy: number, imageSource: SpriteAnimator, hitboxWidth: number, hitboxHeight: number,width: number, height: number, x: number, y: number) {
            this.vx=vx
            this.vy=vy
            this.imageSource=imageSource
            this.hitboxWidth = hitboxWidth
            this.hitboxHeight = hitboxHeight
            this.width = width
            this.height = height
            this.x=x
            this.y=y
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
    }
    update(delta: number): void {
        throw new Error("Method not implemented.");
    }

}