import { EntityInterface } from "../Utils/Interfaces";
import { AnimationObjectCreate } from "./AnimationObjectCreate";
import { SpriteAnimator } from "./SpriteAnimator";
import rock from "../../Img/rock.png"
export class Rock implements EntityInterface{
    vx: number;
    vy: number;
    imageSource: SpriteAnimator;
    hitboxWidth: number;
    hitboxHeight: number;
    width: number;
    height: number;
    x: number;
    y: number;
    hitboxX: number;
    hitboxY: number;

    constructor(x:number,y:number) {
        //TODO:zaimpelemntować dynamiczne renderowanie rock
        this.x= x
        this.y= y
        this.width=70
        this.height=70
        this.hitboxX = this.x +7
        this.hitboxY = this.y +7
        this.hitboxHeight = this.height-13
        this.hitboxWidth = this.width-15
        this.imageSource = new SpriteAnimator([new AnimationObjectCreate(rock,32,32,true,0,0,"static",0,0)])
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
    }

    update(): void {}

}