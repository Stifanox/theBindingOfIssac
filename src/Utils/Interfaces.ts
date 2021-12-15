import { Door } from "../Classes/Door";
import { DoorBoss } from "../Classes/DoorBoss";
import { DoorTresure } from "../Classes/DoorTresure";
import { SpriteAnimator } from "../Classes/SpriteAnimator";
import { Enemy } from "./Enemy";
import { Item } from "./Item";
import { Pickup } from "./Pickup";

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
    draw(ctx?:CanvasRenderingContext2D): void ;
    update(delta:number): void;
}

/**
 * Basic interface for all entities.
 * @extends Position 
 * @extends Animation
 */
export interface EntityInterface extends Position, Animation,Hitbox{
    vx:number
    vy:number
    imageSource:SpriteAnimator
    width:number
    height:number
    canMove?:Actions
}

export interface Hitbox{
    hitboxWidth:number
    hitboxHeight:number
    hitboxX:number
    hitboxY:number
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
}
export interface EnemyUpdate{
    update(delta:number,playerX:number,playerY:number):void
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
    health:number;
    currentHealth:number
}

export interface Removeable{
    markForDeletion:boolean
    markToDelete():void
}

export interface PlayerPickup{
    coins:number
    bombs:number
    keys:number
}
export interface Room{
    id:number;
    enemies:Enemy[];
    objects:EntityInterface[]
    doors:(Door|DoorTresure|DoorBoss)[]
    items:Item[],
    pickups:Pickup[]
}
export interface Music{
    audio:HTMLAudioElement
    playMusic():void
}