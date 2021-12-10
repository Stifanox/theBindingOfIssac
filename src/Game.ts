import { Enemy } from "./Classes/Enemy";
import { KeyboardControler } from "./Classes/KeyboardControler";
import { Player } from "./Classes/Player";
import { Tear } from "./Classes/Tear";
import { MovementActionObject, ShotActionObject } from "./Utils/Actions";
import { Animation } from "./Utils/Interfaces";

export class Game implements Animation{
    
    keyboardControler:KeyboardControler
    ctx:CanvasRenderingContext2D
    player:Player
    enemies: Enemy[]
    tears:Tear[]
    constructor(ctx:CanvasRenderingContext2D){
        this.ctx = ctx
        this.enemies = []
        this.tears = []
        this.player= new Player(this.tears)
        this.keyboardControler = new KeyboardControler(MovementActionObject,ShotActionObject)
        
    }
    
    /**
     * Draw all possible entities
     */
    draw(): void {
        this.player.draw(this.ctx)
        this.enemies.forEach(enemy =>{
            enemy.draw(this.ctx)
        })
        this.tears.forEach(tear =>{
            tear.draw(this.ctx)
        })
    }
    /**
     * Updates all possible entities
     * @param delta time between two rendered frames
     */
    update(delta:number): void {
        this.player.update(delta)
        this.enemies.forEach(enemy =>{
            enemy.update(delta)
        })
        this.tears.forEach(tear =>{
            tear.update(delta)
        })
    }
}