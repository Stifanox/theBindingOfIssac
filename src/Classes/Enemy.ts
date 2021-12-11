import { Actions, EntityInterface, FaceEntity, Removeable } from "../Utils/Interfaces";
import { SpriteAnimator } from "./SpriteAnimator";
import { Tear } from "./Tear";

//TODO: zrobić klasę faceEnemy
//TODO: zrobić metodę która będzie odejmować zdrowie przeciwnika 
export class Enemy implements EntityInterface,Removeable{
    markForDeletion: boolean;
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
    canMove: Actions;
    health:number

    constructor(vx: number, vy: number, imageSource: SpriteAnimator, x: number, y: number, health:number) {
            this.vx=vx
            this.vy=vy
            this.imageSource=imageSource
            //FIXME:hitbox musi być zależny od również wysokości głowy(jeżeli przeciwnik ma głowę)
            this.hitboxWidth = imageSource.spriteWidth
            this.hitboxHeight = imageSource.spriteHeight
            //FIXME:Później inaczej dodawać szerokość i wysokość
            this.width = imageSource.spriteWidth+20
            this.height = imageSource.spriteHeight+20
            //FIXME:Możliwe że inaczej będzie trzeba to zaimplementować
            this.hitboxX = this.x
            this.hitboxY = this.y
            this.x=x
            this.y=y
            this.health = health
            this.markForDeletion = false
            this.canMove = {
                UP:true,
                DOWN:true,
                LEFT:true,
                RIGHT:true,
            }
    }
  

    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
        //FIXME:DEBUG
        ctx.beginPath()
        ctx.rect(this.hitboxX,this.hitboxY,this.hitboxWidth,this.hitboxHeight)
        ctx.stroke()
        //FIXME:DEBUG
    }
    update(delta: number): void {
        if(this.health < 0) this.markForDeletion = true
    }

    dealDamage(tear:Tear){
        this.health -= tear.damage
    }

    //TODO: będzie można tu podawać offset hitboxa
    protected updateHitboxPosition(){
        this.hitboxX = this.x + 8
        this.hitboxY = this.y + 5
    }
}