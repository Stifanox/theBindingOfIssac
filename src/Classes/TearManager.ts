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
        this.internalTimer = this.playerStats.tears
    }

    /**
     * 
     * @param delta Time between two frames
     * @param playerX Position x of player
     * @param playerY Position y of player
     */
    update(delta: number,playerX:number,playerY:number): void {
        this.internalTimer += delta
        if(!Object.values(ShotActionObject).includes(true)) return
        //FIXME:Zmieniać to na podstwaie statystyk gracza
        if(this.internalTimer > this.playerStats.tears){
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