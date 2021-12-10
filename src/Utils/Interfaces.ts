import { SpriteAnimator } from "../Classes/SpriteAnimator";

/**
 * Basic interface for position
 */
export interface Position{
    x:number
    y:number
}

/**
 * Basic interface for animation 
 */
export interface Animation{
    draw(ctx?:CanvasRenderingContext2D): void 
    update(delta:number): void
}

/**
 * Basic interface for all entities.
 * @extends Position 
 * @extends Animation
 */
export interface EntityInterface extends Position, Animation{
    vx:number
    vy:number
    imageSource:SpriteAnimator
    hitboxWidth:number
    hitboxHeight:number
    width:number
    height:number
}

export interface FaceEntity{
    headSource:SpriteAnimator;
    headWidth:number;
    headHeight:number;
    movementObject:Actions
}

/**
 * Basic interface for animation class.
 */
export interface SpriteAnimation{
    imageSource: HTMLImageElement
    spriteWidth:number
    spriteHeight:number
    frameX:number
    frames:number
    staticObject:boolean
    heightOfSource:number
}
export interface KeyMap{
    UP:number
    DOWN:number
    LEFT:number
    RIGHT:number
}
export interface Actions{
    UP:boolean
    DOWN:boolean
    LEFT:boolean
    RIGHT:boolean
}

export interface AnimationObject{
    imageSource:string
    spriteWidth: number
    spriteHeight: number
    staticObject:boolean
    frames:number
    offsetOfFrame:number
    offsetYStart: number
    offsetXStart:number
    animationName:string
}

export interface PlayerStats{
    damage:number;
    tears:number;
    range:number;
    shotSpeed:number;
    speed:number;
    
}