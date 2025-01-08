import { SpriteAnimator } from "../Classes/Animation/SpriteAnimator";
import { Actions, EntityInterface, Music, Removeable } from "./Interfaces";

type pickup = "bomb"|"coin"|"key"|"heart"

export abstract class Pickup implements EntityInterface,Removeable,Music{
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
    markForDeletion: boolean;
    showItem:boolean
    type:pickup
    audio: HTMLAudioElement;

    constructor(x:number,y:number,imageSource:SpriteAnimator,type:pickup) {
        this.x = x
        this.y = y
        this.imageSource = imageSource
        this.width = this.imageSource.spriteWidth 
        this.height =this.imageSource.spriteHeight
        this.hitboxWidth= this.width
        this.hitboxHeight = this.height
        this.hitboxX = this.x
        this.hitboxY = this.y
        this.markForDeletion = false
        this.showItem = false
        this.type = type
        this.audio = new Audio()
    }
   

    draw(ctx?: CanvasRenderingContext2D): void {
        if(this.showItem) this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
    }
    update(delta: number,enemiesCount?:number): void {
        if(enemiesCount==0) this.showItem = true
    }

    markToDelete(): void {
        this.markForDeletion = true
    }

    playMusic(){
        this.audio.play()
    }
}