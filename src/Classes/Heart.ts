import { Pickup } from "../Utils/Pickup";
import { AnimationObjectCreate } from "./AnimationObjectCreate";
import { SpriteAnimator } from "./SpriteAnimator";
import pickup_heart from "../../Img/pickup_heart.png"
export class Heart extends Pickup{
    constructor(x:number,y:number) {
        super(x,y,new SpriteAnimator([new AnimationObjectCreate(pickup_heart,30,30,true,0,0,"static",0,0)]),"heart")
        this.width = 50
        this.height =50
    }
}