import { AnimationObjectCreate } from "../Classes/AnimationObjectCreate";
import { SpriteAnimator } from "../Classes/SpriteAnimator";
import { Actions, EntityInterface, PlayerPickup, PlayerStats, Removeable } from "./Interfaces";

export abstract class Item implements EntityInterface,Removeable{
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
    distance:number;
    statsToUpdate:PlayerStats;
    itemsToGive:PlayerPickup;
    markForDeletion: boolean;
    itemName:string

    constructor(imageSource:string,widthOfSprite:number,heightOfSprite:number,width:number,height:number,x:number,y:number) {
        this.imageSource = new SpriteAnimator([new AnimationObjectCreate(imageSource,widthOfSprite,heightOfSprite,true,0,0,"static",0,0)])
        this.width = width 
        this.height = height
        this.x=x
        this.y=y
        this.hitboxX = x
        this.hitboxY = y
        this.hitboxWidth = width+10
        this.hitboxHeight = height*2
        this.vy =0.03
        this.distance = 0
        this.markForDeletion = false
        this.statsToUpdate ={
            damage:0,
            tears:0,
            range:0,
            shotSpeed:0,
            speed:0,
            health:0,
            currentHealth:0
        }

        this.itemsToGive ={
            coins:0,
            bombs:0,
            keys:0
        }

    }

    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
    }

    update(delta: number): void {
        this.distance += this.vy*delta

        if(this.distance>=15) this.vy = -Math.abs(this.vy)
        else if(this.distance <=0 ) this.vy = Math.abs(this.vy)
        
        this.y += this.vy*delta
    }

    markToDelete(){
        this.markForDeletion = true
    }

    protected hitboxUpdate(offsetX:number){
        this.hitboxX = this.x + offsetX
    }

}
    