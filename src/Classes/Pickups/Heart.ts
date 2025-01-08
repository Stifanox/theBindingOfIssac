import { Pickup } from "../../Utils/Pickup";
import { AnimationObjectCreate } from "../Animation/AnimationObjectCreate";
import { SpriteAnimator } from "../Animation/SpriteAnimator";
import { ImgHearth } from "../../Importer/ImageImporter"

export class Heart extends Pickup{
    constructor(x:number,y:number) {
        super(x,y,new SpriteAnimator([new AnimationObjectCreate(ImgHearth,30,30,true,0,0,"static",0,0)]),"heart")
        this.width = 50
        this.height =50
    }
}