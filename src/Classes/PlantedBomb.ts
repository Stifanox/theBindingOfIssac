import { Actions, EntityInterface, Removeable } from "../Utils/Interfaces";
import { SpriteAnimator } from "./SpriteAnimator";
import bomb from "../../Img/bomb.png"
import { AnimationObjectCreate } from "./AnimationObjectCreate";

export class PlantedBomb implements EntityInterface,Removeable{
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
    internalTimer:number
    markForDeletion: boolean;

    constructor(x:number,y:number){
        this.x = x
        this.y = y
        this.imageSource = new SpriteAnimator([new AnimationObjectCreate(bomb,30,30,true,0,0,"static",0,0)])
        this.width = this.imageSource.spriteWidth +30
        this.height =this.imageSource.spriteHeight + 30
        this.hitboxX=this.x
        this.hitboxY = this.y
        this.hitboxWidth = this.width
        this.hitboxHeight = this.height 
        this.internalTimer = 0
        this.markForDeletion = false
    }
    markToDelete(): void {
        this.markForDeletion = true
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
    }
    update(delta: number): void {

        this.internalTimer += delta

        this.height += Math.sin(this.internalTimer * (Math.PI/360)) * .5
        this.width += Math.cos(this.internalTimer * (Math.PI/360)) *.7

        if(this.internalTimer > 2000){
            this.hitboxX -=70
            this.hitboxY -=70
            this.hitboxWidth += 120
            this.hitboxHeight += 120
            this.markToDelete()
        }
    }
}