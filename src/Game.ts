import { KeyboardControler } from "./Classes/KeyboardControler";
import { Player } from "./Classes/Player";
import { MovementActionObject, ShotActionObject } from "./Utils/Actions";
import { Animation } from "./Utils/Interfaces";
export class Game implements Animation{
    
    keyboardControler:KeyboardControler
    ctx:CanvasRenderingContext2D
    player:Player
    enemies: any[]

    constructor(ctx:CanvasRenderingContext2D){
        this.keyboardControler =  new KeyboardControler(MovementActionObject,ShotActionObject)
        this.ctx = ctx
        this.player= new Player()
        this.enemies = []
    }
    
    /**
     * Draw all possible entities
     */
    draw(): void {
        this.player.draw(this.ctx)
        this.enemies.forEach(el =>{
            el.draw()
            el.update()
        })
    }
    /**
     * Updates all possible entities
     * @param delta time between two rendered frames
     */
    update(delta:number): void {
        this.player.update(delta)
    }
}