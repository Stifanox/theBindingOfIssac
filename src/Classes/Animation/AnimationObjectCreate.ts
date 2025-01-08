import { AnimationObject } from "../../Utils/Interfaces";

export class AnimationObjectCreate implements AnimationObject{
    imageSource: string;
    spriteWidth: number;
    spriteHeight: number;
    staticObject: boolean;
    frames: number;
    offsetOfFrame:number;
    offsetYStart: number;
    offsetXStart:number;
    animationName: string;
    /**
     * 
     * @param imageSource Link to source file that's is animation frames
     * @param spriteWidth Width of sprite
     * @param spriteHeight Height of sprite
     * @param staticObject Does object have any frames at all. If no frames are in animation, value should be true.
     * @param frames How many frames that animation have. The value should be frame count - 1
     * @param offsetYStart Position of spite in image (y value)
     * @param offsetXStart Position of spite in image (x value). Default value is 6 px
     * @param animationName Your name of animation that u will call after
     * @param offsetOfFrame Offset to made each frame on sprite
     */
    constructor(imageSource: string,
        spriteWidth: number,
        spriteHeight: number,
        staticObject: boolean,
        frames: number,
        offsetOfFrame:number,
        animationName: string,
        offsetYStart: number,
        offsetXStart:number = 6) {
        this.imageSource= imageSource
        this.spriteHeight = spriteHeight
        this.offsetYStart=offsetYStart
        this.offsetXStart=offsetXStart
        this.animationName = animationName
        this.spriteWidth = spriteWidth
        this.frames = frames
        this.staticObject = staticObject
        this.offsetOfFrame = offsetOfFrame
    }
}