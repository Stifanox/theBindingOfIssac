import { Actions, EntityInterface } from "../Utils/Interfaces";
import { AnimationObjectCreate } from "./AnimationObjectCreate";
import { SpriteAnimator } from "./SpriteAnimator";

import door_right from "../../Img/door_right_tresure.png"
import door_left from "../../Img/door_left_tresure.png"


import door_right_closed from "../../Img/door_right_tresure_closed.png"
import door_left_closed from "../../Img/door_left_tresure_closed.png"

import { Player } from "./Player";

type doorDirection = "up"|"down"|"left"|"right"

export class DoorTresure implements EntityInterface{
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
    id:number
    direction:doorDirection
    isBlocked: boolean
    isClosed:boolean
    constructor(direction:doorDirection,id:number,initalState:boolean) {
        this.setDirection(direction)
        this.direction = direction
        this.hitboxX = this.x
        this.hitboxY = this.y
        this.hitboxHeight = this.height
        this.hitboxWidth = this.width
        this.id = id
        this.isBlocked = false
        this.isClosed = initalState
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
    }

    update(delta: number,enemiesCount?:number): void {
        if(this.isClosed){
            switch(this.direction){
                case "left":
                    this.imageSource.changeSpriteSource(door_left_closed)
                break
                case "right":
                    this.imageSource.changeSpriteSource(door_right_closed)
                break
            }
        }
        else{
            switch(this.direction){
                case "left":
                    this.imageSource.changeSpriteSource(door_left)
                break
                case "right":
                    this.imageSource.changeSpriteSource(door_right)
                break
            }
        }
    }

    movePlayer(player:Player){
            switch(this.direction){
                case "left":
                    player.x=830
                break
                case "right":
                    player.x = 120
                break
            }        
    }

    private setDirection(direction:doorDirection){
        switch(direction){
            case "left":
                this.imageSource = new SpriteAnimator([new AnimationObjectCreate(door_left,34,50,true,0,0,"static",0,0)])
                this.width = this.imageSource.spriteWidth + 50
                this.height = this.imageSource.spriteHeight + 40
                this.x = 30
                this.y = 275
            break
            case "right":
                this.imageSource = new SpriteAnimator([new AnimationObjectCreate(door_right,34,50,true,0,0,"static",0,0)])
                this.width = this.imageSource.spriteWidth + 50
                this.height = this.imageSource.spriteHeight + 40
                this.x = 885
                this.y = 275
            break
        }
    }
}