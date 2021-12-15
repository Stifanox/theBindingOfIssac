import { KeyMap, Actions } from "../Utils/Interfaces";
import { PlantedBomb } from "./PlantedBomb";
import { Player } from "./Player";

export class KeyboardControler{
    keyMapMovement:KeyMap
    keyMapShot:KeyMap
    movementAction:Actions
    shotAction:Actions
    player:Player
    bombObjects:PlantedBomb[]

    constructor(movementAction:Actions,shotAction:Actions,player:Player,bombObjects:PlantedBomb[]){
        this.keyMapMovement ={
            UP:87,
            DOWN:83,
            LEFT:65,
            RIGHT:68
        }

        this.keyMapShot = {
            UP:38,
            DOWN:40,
            LEFT:37,
            RIGHT:39
        }
        this.player = player
        this.movementAction = movementAction
        this.shotAction = shotAction
        this.bombObjects = bombObjects
        document.addEventListener("keypress",this.setBombOnField.bind(this))
        document.addEventListener("keydown",this.addMovement.bind(this))
        document.addEventListener("keyup",this.removeMovement.bind(this))
        document.addEventListener("keydown",this.addShot.bind(this))
        document.addEventListener("keyup",this.removeShot.bind(this))
    }

    setBombOnField(e:KeyboardEvent){
        if(e.keyCode == 101){
            if(this.player.playerPickup.bombs > 0 ){
                this.bombObjects.push(new PlantedBomb(this.player.x,this.player.y))
                this.player.playerPickup.bombs -= 1
            }
        }
    }

    addMovement(e:KeyboardEvent):void{
        switch(e.keyCode){
            case this.keyMapMovement.UP:
                this.movementAction.UP = true
            break
            case this.keyMapMovement.DOWN:
                this.movementAction.DOWN = true
            break
            case this.keyMapMovement.LEFT:
                this.movementAction.LEFT = true
            break
            case this.keyMapMovement.RIGHT:
                this.movementAction.RIGHT = true
            break
        }        
    }

    removeMovement(e:KeyboardEvent):void{
        switch(e.keyCode){
            case this.keyMapMovement.UP:
                this.movementAction.UP = false
            break
            case this.keyMapMovement.DOWN:
                this.movementAction.DOWN = false
            break
            case this.keyMapMovement.LEFT:
                this.movementAction.LEFT = false
            break
            case this.keyMapMovement.RIGHT:
                this.movementAction.RIGHT = false
            break
        } 
    }

    addShot(e:KeyboardEvent):void{
        switch(e.keyCode){
            case this.keyMapShot.UP:
                this.shotAction.UP = true
            break
            case this.keyMapShot.DOWN:
                this.shotAction.DOWN = true
            break
            case this.keyMapShot.LEFT:
                this.shotAction.LEFT = true
            break
            case this.keyMapShot.RIGHT:
                this.shotAction.RIGHT = true
            break
        }        
    }

    removeShot(e:KeyboardEvent):void{
        switch(e.keyCode){
            case this.keyMapShot.UP:
                this.shotAction.UP = false
            break
            case this.keyMapShot.DOWN:
                this.shotAction.DOWN = false
            break
            case this.keyMapShot.LEFT:
                this.shotAction.LEFT = false
            break
            case this.keyMapShot.RIGHT:
                this.shotAction.RIGHT = false
            break
        }        
    }
}