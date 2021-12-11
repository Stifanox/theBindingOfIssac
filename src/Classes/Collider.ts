import { Animation, EntityInterface } from "../Utils/Interfaces";
import { Enemy } from "./Enemy";
import { Player } from "./Player";
import { Tear } from "./Tear";
import {collision, whichSideCollision} from "../Utils/UtilFunctions"
import { PlayfieldHitbox } from "../Utils/PlayfiledSize";
import { MovementActionObject } from "../Utils/Actions";

export class Collider implements Animation{
    player:Player
    enemies:Enemy[]
    objects:EntityInterface[]
    tears:Tear[]

    constructor(player:Player, enemies:Enemy[], objects:EntityInterface[], tears:Tear[]) {
        this.player = player
        this.enemies = enemies
        this.objects = objects
        this.tears = tears
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        //FIXME:DEBUG
        // ctx.beginPath()
        // ctx.rect(PlayfieldHitbox.hitboxX,PlayfieldHitbox.hitboxY,PlayfieldHitbox.hitboxWidth,PlayfieldHitbox.hitboxHeight)
        // ctx.stroke()
        //FIXME:DEBUG
    }

    update(): void {
        
        this.objects.forEach(object =>{
            //Collision object <-> player
            if(collision(object,this.player)) {
                switch(whichSideCollision(this.player,object)){
                    case "Left":
                        this.player.canMove.LEFT =false                        
                    break
                    case "Right":
                        this.player.canMove.RIGHT =false
                    break
                    case "Top":
                        this.player.canMove.UP = false
                    break
                    case "Bottom":
                        this.player.canMove.DOWN = false
                    break
                }
            }
        })

        this.tears.forEach(tear =>{
            //Collision tear <-> object
            this.objects.forEach(object =>{
                if(collision(tear,object)){
                    tear.markToDelete()
                }
            })
            //Collision tear <-> wall
            if(!collision(PlayfieldHitbox,tear)){
                tear.markToDelete()
            }

            this.enemies.forEach(enemy =>{
                if(collision(tear,enemy)){
                    tear.markToDelete()
                    enemy.dealDamage(tear)
                }   
            })
        })
    }
}