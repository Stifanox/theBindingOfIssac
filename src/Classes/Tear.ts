type velocityType = "up"|"down"|"left"|"right"

import { EntityInterface, PlayerStats, Removeable } from "../Utils/Interfaces";
import { AnimationObjectCreate } from "./AnimationObjectCreate";
import { SpriteAnimator } from "./SpriteAnimator";
import tear from "../../Img/one_tear.png"
export class Tear implements EntityInterface,Removeable{
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
    markForDeletion: boolean;
    playerStats:PlayerStats;
    damage:number
    range:number;
    distanceTraveled:number

    static UP:velocityType = "up"
    static DOWN:velocityType  = "down"
    static LEFT:velocityType  = "left"
    static RIGHT:velocityType  = "right"

    constructor(tearVelocity:velocityType,playerX:number,playerY:number,playerStats:PlayerStats) {
        this.playerStats = playerStats
        this.vx=0
        this.vy=0
        this.damage = 0
        this.range = 0
        this.distanceTraveled =0
        this.markForDeletion = false
        this.imageSource=new SpriteAnimator([new AnimationObjectCreate(tear,66,66,true,0,0,"tear",0,0)])
        //TODO:zmieniać hitbox zależne od obrażeń gracza
        this.hitboxX= this.x
        this.hitboxY = this.y
        this.width = this.imageSource.spriteWidth - 40
        this.height = this.imageSource.spriteHeight - 40
        this.hitboxHeight = this.width
        this.hitboxWidth = this.height
        this.x= playerX
        this.y= playerY
        this.setStatsOfTear(tearVelocity)
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
        this.x += delta * this.vx
        this.y += delta * this.vy
        this.distanceTraveled += delta * this.vx + delta * this.vy
        
        if(this.distanceTraveled > this.range) this.markToDelete()

        this.updateHitboxPosition()
        
        this.imageSource.update(delta)
    }

    setStatsOfTear(tearVelocity:velocityType){
        const tearSpeed = this.playerStats.shotSpeed
        this.damage = this.playerStats.damage
        this.range = this.playerStats.range

        if(tearVelocity == Tear.UP||tearVelocity == Tear.DOWN){
            this.vx=0
            if(tearVelocity == Tear.UP){
                this.vy= -tearSpeed  
                this.x += 9
                this.y -=60
            }else{
                this.vy = tearSpeed
                this.x +=9
                this.y -=10
            }
        }
        else{
            this.vy=0
            if(tearVelocity == Tear.LEFT){
                this.vx= -tearSpeed
                this.x -=25
                this.y -= 20
            }
            else{
                this.vx= tearSpeed
                this.x += 40
                this.y -= 20
            }
        }
    }

    private updateHitboxPosition(){
        this.hitboxX = this.x 
        this.hitboxY = this.y 
    }

    markToDelete(){
        this.markForDeletion = true
    }
}