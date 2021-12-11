import { Tear } from "./Tear";
import { ShotActionObject } from "../Utils/Actions";
import { PlayerStats } from "../Utils/Interfaces";

export class TearManager{

    tears:Tear[]
    internalTimer:number
    playerStats:PlayerStats
    constructor(tearArray:Tear[],playerStats:PlayerStats) {
        this.tears = tearArray
        this.playerStats= playerStats
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

        if(this.internalTimer > 100){
            let tear: Tear
            if(ShotActionObject.UP) tear = new Tear(Tear.UP,playerX,playerY,this.playerStats)
            else if(ShotActionObject.DOWN) tear = new Tear(Tear.DOWN,playerX,playerY,this.playerStats)
            else if(ShotActionObject.LEFT) tear = new Tear(Tear.LEFT,playerX,playerY,this.playerStats)
            else if(ShotActionObject.RIGHT) tear = new Tear(Tear.RIGHT,playerX,playerY,this.playerStats)

            this.tears.push(tear)
            this.internalTimer = 0
        }
    }

}