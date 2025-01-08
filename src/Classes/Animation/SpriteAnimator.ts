import {AnimationObject, SpriteAnimation} from "../../Utils/Interfaces";


/**
 * Class that allow to draw and animate entities in game.
 */
export class SpriteAnimator implements SpriteAnimation {
    imageSource: HTMLImageElement
    spriteWidth: number;
    spriteHeight: number;
    frameX: number;
    frames: number;
    staticObject: boolean;
    internalTimer: number
    offsetYStart: number;
    offsetXStart: number;
    offsetOfFrame: number
    animationArray: AnimationObject[]

    constructor(arrayOfAnimations: AnimationObject[]) {
        if (!arrayOfAnimations.length) throw new Error("Array of animations is empty")
        this.animationArray = arrayOfAnimations

        this.internalTimer = 0
        this.frameX = 0
        this.frames = this.animationArray[0].frames
        this.spriteHeight = this.animationArray[0].spriteHeight
        this.spriteWidth = this.animationArray[0].spriteWidth
        this.staticObject = this.animationArray[0].staticObject
        this.offsetYStart = this.animationArray[0].offsetYStart
        this.offsetXStart = this.animationArray[0].offsetXStart
        this.offsetOfFrame = this.animationArray[0].offsetOfFrame
        const img = new Image(this.spriteWidth, this.spriteHeight)
        img.src = this.animationArray[0].imageSource
        this.imageSource = img
    }

    /**
     * Do animation. By providing spritesheet draws parts of image.
     * @param delta number between 2 frames. This number is generated by requestAnimationFrame.
     * @param action name of animation to play. If not provided action is none which is equivalent of first frame of first provided animation object from constructor.
     * @param internalTime defines how long should one frame of animation be rendered
     */
    update(delta: number, action: string = "none", internalTime: number = 100): void {

        if (action == "none") {
            this.setCurrentAnimation(this.animationArray[0].animationName)
            this.frameX = 0
            this.internalTimer = 0
            return
        } else {
            this.setCurrentAnimation(action)
        }

        this.internalTimer += delta
        if (this.internalTimer > internalTime) {
            this.frameX++
            this.internalTimer = 0
        }
        if (this.frameX > this.frames) this.frameX = 0
    }

    /**
     * Actual draw of image. This method is required in all draw methods of entities
     * @param ctx canvas 2D context provided from game.
     * @param x position X of entity in canvas.
     * @param y position Y of entity in canvas.
     * @param width width of sprite.
     * @param height height of sprite.
     */
    draw(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void {
        ctx.drawImage(this.imageSource, this.offsetXStart + (this.frameX * this.offsetOfFrame), this.offsetYStart, this.spriteWidth, this.spriteHeight, x, y, width, height)
    }

    private setCurrentAnimation(action: string): void {

        const animationObject = this.animationArray.find(el => el.animationName == action)

        if (!animationObject) throw new Error("Name of action doesn't exist. Check if you didn't misspell the name.")

        this.spriteHeight = animationObject.spriteHeight
        this.spriteWidth = animationObject.spriteWidth
        this.staticObject = animationObject.staticObject
        this.offsetYStart = animationObject.offsetYStart
        this.offsetXStart = animationObject.offsetXStart
    }

    changeSpriteSource(source: string) {
        const img = new Image(this.spriteWidth, this.spriteHeight)
        img.src = source
        this.imageSource = img
    }
}