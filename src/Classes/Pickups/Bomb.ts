import { Pickup } from "../../Utils/Pickup";
import { AnimationObjectCreate } from "../Animation/AnimationObjectCreate";
import { SpriteAnimator } from "../Animation/SpriteAnimator";
import { ImgBomb } from "../../Importer/ImageImporter"
import { SoundPickup } from "../../Importer/SoundImporter"

export class Bomb extends Pickup  {
    constructor(x:number,y:number) {
        super(x,y,new SpriteAnimator([new AnimationObjectCreate(ImgBomb,30,30,true,0,0,"static",0,0)]),"bomb")
        this.width = this.imageSource.spriteWidth +20
        this.height =this.imageSource.spriteHeight+20
        this.audio = new Audio(SoundPickup)
    }
}