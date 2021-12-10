import { Tear } from "./Tear";
import { ShotActionObject } from "../Utils/Actions";

export class TearManager{

    tears:Tear[]
    internalTimer:number

    constructor(tearArray:Tear[]) {
        this.tears = tearArray
        this.internalTimer = 1000
    }

    /**
     * 
     * @param delta time between two frames
     * @param playerX position x of player
     * @param playerY position y of player
     */
    update(delta: number,playerX:number,playerY:number): void {
        this.internalTimer += delta
        if(!Object.values(ShotActionObject).includes(true)) return

        if(this.internalTimer > 1000){
            let tear: Tear
            if(ShotActionObject.UP) tear = new Tear(Tear.UP,playerX,playerY)
            else if(ShotActionObject.DOWN) tear = new Tear(Tear.DOWN,playerX,playerY)
            else if(ShotActionObject.LEFT) tear = new Tear(Tear.LEFT,playerX,playerY)
            else if(ShotActionObject.RIGHT) tear = new Tear(Tear.RIGHT,playerX,playerY)

            this.tears.push(tear)
            this.internalTimer = 0
        }
    }

}