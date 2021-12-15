import { Pickup } from "../Utils/Pickup";
import { AnimationObjectCreate } from "./AnimationObjectCreate";
import { SpriteAnimator } from "./SpriteAnimator";
import bomb from "../../Img/bomb.png"
import coin_music from "../../assets/coin.mp3"

export class Bomb extends Pickup  {
    constructor(x:number,y:number) {
        super(x,y,new SpriteAnimator([new AnimationObjectCreate(bomb,30,30,true,0,0,"static",0,0)]),"bomb")
        this.width = this.imageSource.spriteWidth +20
        this.height =this.imageSource.spriteHeight+20
        this.audio = new Audio(coin_music)
    }
}