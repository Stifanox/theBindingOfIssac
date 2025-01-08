import { Actions, EntityInterface, Music, Removeable } from "./Interfaces";
import { SpriteAnimator } from "../Classes/Animation/SpriteAnimator";
import { Tear } from "../Classes/Player/Tear";
import death_music from "../../assets/enemydeath.mp3"

export abstract class Enemy implements EntityInterface,Removeable,Music{
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
    health:number
    maxHealth:number
    canMove?: Actions;
    isFlying:boolean
    movementObject:Actions
    canHaveKnockback:boolean
    type:string
    added:boolean
    audio: HTMLAudioElement;
    
    constructor(vx: number, vy: number, imageSource: SpriteAnimator, x: number, y: number, health:number) {
            this.vx=vx
            this.vy=vy
            this.imageSource=imageSource
            this.hitboxWidth = imageSource.spriteWidth
            this.hitboxHeight = imageSource.spriteHeight
            //FIXME:Później inaczej dodawać szerokość i wysokość
            this.width = imageSource.spriteWidth
            this.height = imageSource.spriteHeight
            //FIXME:Możliwe że inaczej będzie trzeba to zaimplementować
            this.hitboxX = this.x
            this.hitboxY = this.y
            this.x=x
            this.y=y
            this.health = health
            this.maxHealth = health
            this.markForDeletion = false
            this.canMove ={
                UP:true,
                DOWN:true,
                LEFT:true,
                RIGHT:true,
            }
            this.movementObject ={
                UP:false,
                DOWN:false,
                LEFT:false,
                RIGHT:false,
            }
            this.isFlying = false
            this.canHaveKnockback =true
            this.added = false
            this.audio = new Audio(death_music)
    }
    playMusic(): void {
        this.audio.play()
    }

    markToDelete(): void {
        this.markForDeletion = true
    }
  

    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
    }

    update(delta: number,playerX?:number,playerY?:number): void {
        if(this.health < 0) {
            this.markToDelete()
            this.playMusic()
        }
        this.canMove.DOWN=true
        this.canMove.UP=true
        this.canMove.LEFT=true
        this.canMove.RIGHT=true
    }

    dealDamage(tear:Tear){
        this.health -= tear.damage
        if(!this.canHaveKnockback) return
        if(tear.vx){
            if(tear.vx>0) this.x +=10
            else this.x -=10
        }else{
            if(tear.vy>0) this.y +=10
            else this.y -=10
        }
    }

    /**
     * 
     * @param offsetX Number to offset hitbox on axis X. X is relative to (x,y) of sprite
     * @param offsetY Number to offset hitbox on axis Y. Y is relative to (x,y) of sprite
     */
    protected updateHitboxPosition(offsetX:number,offsetY:number){
        this.hitboxX = this.x + offsetX
        this.hitboxY = this.y + offsetY
    }
}