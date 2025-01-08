import { Tear } from "./Tear";
import { ShotActionObject } from "../../Utils/Actions";
import { Music, PlayerStats } from "../../Utils/Interfaces";
import player_attack from "../../../assets/playerattack.wav"

export class TearManager implements Music{

    tears:Tear[]
    internalTimer:number
    playerStats:PlayerStats
    audio: HTMLAudioElement;

    constructor(tearArray:Tear[],playerStats:PlayerStats) {
        this.tears = tearArray
        this.playerStats= playerStats
        this.internalTimer = this.playerStats.tears
        this.audio = new Audio(player_attack)
        this.audio.volume = 0.2
    }

    playMusic(): void {
        this.audio.play()
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
        if(this.internalTimer > this.playerStats.tears){
            let tear: Tear
            if(ShotActionObject.UP) tear = new Tear(Tear.UP,playerX,playerY,this.playerStats)
            else if(ShotActionObject.DOWN) tear = new Tear(Tear.DOWN,playerX,playerY,this.playerStats)
            else if(ShotActionObject.LEFT) tear = new Tear(Tear.LEFT,playerX,playerY,this.playerStats)
            else if(ShotActionObject.RIGHT) tear = new Tear(Tear.RIGHT,playerX,playerY,this.playerStats)

            this.tears.push(tear)
            this.playMusic()
            this.internalTimer = 0
        }
    }

}