import { SpriteAnimator } from "../Classes/Animation/SpriteAnimator";
import { Enemy } from "./Enemy";
import { Actions } from "./Interfaces";

export abstract class FlyingEnemy extends Enemy{
    
    movementObject:Actions
    constructor(vx:number,vy:number,x:number,y:number,health:number,imageSource:SpriteAnimator) {
        super(vx,vy,imageSource,x,y,health)
        this.isFlying = true
        
    }

}