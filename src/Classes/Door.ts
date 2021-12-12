import { Actions, EntityInterface } from "../Utils/Interfaces";
import { AnimationObjectCreate } from "./AnimationObjectCreate";
import { SpriteAnimator } from "./SpriteAnimator";
import door_up from "../../Img/door_up.png"
import door_down from "../../Img/door_down.png"
import door_right from "../../Img/door_right.png"
import door_left from "../../Img/door_left.png"

import door_up_closed from "../../Img/door_up_closed.png"
import door_down_closed from "../../Img/door_down_closed.png"
import door_right_closed from "../../Img/door_right_closed.png"
import door_left_closed from "../../Img/door_left_closed.png"

import { Player } from "./Player";

type doorDirection = "up"|"down"|"left"|"right"

export class Door implements EntityInterface{
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

    constructor(direction:doorDirection,id:number) {
        this.setDirection(direction)
        this.direction = direction
        this.hitboxX = this.x
        this.hitboxY = this.y
        this.hitboxHeight = this.height
        this.hitboxWidth = this.width
        this.id = id
        this.isBlocked = false
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx,this.x,this.y,this.width,this.height)
        //FIXME:DEBUG
        ctx.beginPath()
        ctx.rect(this.hitboxX,this.hitboxY,this.hitboxWidth,this.hitboxHeight)
        ctx.stroke()
        //FIXME:DEBUG
    }

    update(delta: number,enemiesCount?:number): void {
        if(enemiesCount>0) {
            this.isBlocked = true
            switch(this.direction){
                case "up":
                    this.imageSource.changeSpriteSource(door_up_closed)
                break
                case "down":
                    this.imageSource.changeSpriteSource(door_down_closed)
                break
                case "left":
                    this.imageSource.changeSpriteSource(door_left_closed)
                break
                case "right":
                    this.imageSource.changeSpriteSource(door_right_closed)
                break
            }
        }
        else {
            this.isBlocked = false
            switch(this.direction){
                case "up":
                    this.imageSource.changeSpriteSource(door_up)
                break
                case "down":
                    this.imageSource.changeSpriteSource(door_down)
                break
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
            case "up":
                player.y = 500
            break
            case "down":
                player.y = 120
            break
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
            case "up":
                this.imageSource = new SpriteAnimator([new AnimationObjectCreate(door_up,50,34,true,0,0,"static",0,0)])
                this.width = this.imageSource.spriteWidth + 50
                this.height = this.imageSource.spriteHeight + 40
                this.x = 450
                this.y = 40
            break
            case "down":
                this.imageSource = new SpriteAnimator([new AnimationObjectCreate(door_down,50,34,true,0,0,"static",0,0)])
                this.width = this.imageSource.spriteWidth + 50
                this.height = this.imageSource.spriteHeight + 40
                this.x = 450
                this.y = 535
            break
            case "left":
                this.imageSource = new SpriteAnimator([new AnimationObjectCreate(door_left,34,50,true,0,0,"static",0,0)])
                this.width = this.imageSource.spriteWidth + 50
                this.height = this.imageSource.spriteHeight + 35
                this.x = 30
                this.y = 275
            break
            case "right":
                this.imageSource = new SpriteAnimator([new AnimationObjectCreate(door_right,34,50,true,0,0,"static",0,0)])
                this.width = this.imageSource.spriteWidth + 50
                this.height = this.imageSource.spriteHeight + 35
                this.x = 885
                this.y = 275
            break
        }
    }
}