import { Actions, EntityInterface } from "src/Utils/Interfaces";
import { SpriteAnimator } from "../Animation/SpriteAnimator";
import {DifferentSprites, ImgSize, ImgSource} from "src/Utils/Interfaces/Door";
import { AnimationObjectCreate } from "../Animation/AnimationObjectCreate";
import { Player } from "../Player/Player";

type DoorDirection = "up" | "down" | "left" | "right"

abstract class Door implements EntityInterface, DifferentSprites {

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
    id: number
    direction: DoorDirection
    isBlocked: boolean
    protected doorImageSource: ImgSource
    protected doorImageSizes: ImgSize

    constructor(direction: DoorDirection, id: number) {
        this.doorImageSource = this.provideImageSources()
        this.doorImageSizes = this.provideImageSizes()
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
        this.imageSource.draw(ctx, this.x, this.y, this.width, this.height)
    }

    update(delta: number, enemiesCount?: number): void {
        if (enemiesCount > 0) {
            this.isBlocked = true
            switch (this.direction) {
                case "up":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorUpClosed)
                    break
                case "down":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorDownClosed)
                    break
                case "left":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorLeftClosed)
                    break
                case "right":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorRightClosed)
                    break
            }
        }
        else {
            this.isBlocked = false
            switch (this.direction) {
                case "up":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorUp)
                    break
                case "down":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorDown)
                    break
                case "left":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorLeft)
                    break
                case "right":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorRight)
                    break
            }
        }
    }

    movePlayer(player: Player) {
        switch (this.direction) {
            case "up":
                player.y = 500
                break
            case "down":
                player.y = 130
                break
            case "left":
                player.x = 830
                break
            case "right":
                player.x = 120
                break
        }
    }

    private setDirection(direction: DoorDirection) {
        switch (direction) {
            case "up":
                this.imageSource = new SpriteAnimator([new AnimationObjectCreate(this.doorImageSource.imgDoorUp, this.doorImageSizes.up.spriteWidth, this.doorImageSizes.up.spriteHeight, true, 0, 0, "static", 0, 0)])
                this.width = this.imageSource.spriteWidth + this.doorImageSizes.up.widthOffset
                this.height = this.imageSource.spriteHeight + this.doorImageSizes.up.heightOffset
                this.x = 450
                this.y = 40
                break
            case "down":
                this.imageSource = new SpriteAnimator([new AnimationObjectCreate(this.doorImageSource.imgDoorDown, this.doorImageSizes.down.spriteWidth, this.doorImageSizes.down.spriteHeight, true, 0, 0, "static", 0, 0)])
                this.width = this.imageSource.spriteWidth + this.doorImageSizes.down.widthOffset
                this.height = this.imageSource.spriteHeight + this.doorImageSizes.down.heightOffset
                this.x = 450
                this.y = 535
                break
            case "left":
                this.imageSource = new SpriteAnimator([new AnimationObjectCreate(this.doorImageSource.imgDoorLeft, this.doorImageSizes.left.spriteWidth, this.doorImageSizes.left.spriteHeight, true, 0, 0, "static", 0, 0)])
                this.width = this.imageSource.spriteWidth + this.doorImageSizes.left.widthOffset
                this.height = this.imageSource.spriteHeight + this.doorImageSizes.left.heightOffset
                this.x = 30
                this.y = 275
                break
            case "right":
                this.imageSource = new SpriteAnimator([new AnimationObjectCreate(this.doorImageSource.imgDoorRight, this.doorImageSizes.right.spriteWidth, this.doorImageSizes.right.spriteHeight, true, 0, 0, "static", 0, 0)])
                this.width = this.imageSource.spriteWidth + this.doorImageSizes.right.widthOffset
                this.height = this.imageSource.spriteHeight + this.doorImageSizes.right.heightOffset
                this.x = 885
                this.y = 275
                break
        }
    }

    provideImageSources(): ImgSource {
        throw new Error("provideImageSource method must be overriden. Error occured in " + this.constructor.name);
    }

    provideImageSizes(): ImgSize {
        throw new Error("provideImageSizes method must be overriden. Error occured in " + this.constructor.name);
    }

}

export {Door, DoorDirection}