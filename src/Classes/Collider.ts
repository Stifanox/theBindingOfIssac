import { Animation, EntityInterface } from "../Utils/Interfaces";
import { Enemy } from "../Utils/Enemy";
import { Player } from "./Player";
import { Tear } from "./Tear";
import {collision, whichSideCollision} from "../Utils/UtilFunctions"
import { PlayfieldHitbox } from "../Utils/PlayfiledSize";
import { MovementActionObject } from "../Utils/Actions";
import { Door } from "./Door";
import { MapGeneration } from "../Utils/MapGeneration";

export class Collider implements Animation{
    player:Player
    enemies:Enemy[]
    objects:EntityInterface[]
    tears:Tear[]
    doors:Door[]
    mapGenerator:MapGeneration

    constructor(player:Player, enemies:Enemy[], objects:EntityInterface[], tears:Tear[],doors:Door[],mapGenerator:MapGeneration) {
        this.player = player
        this.enemies = enemies
        this.objects = objects
        this.tears = tears
        this.doors = doors
        this.mapGenerator = mapGenerator
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
            //Collision tear <-> object
            this.tears.forEach(tear =>{
                if(collision(tear,object)){
                    tear.markToDelete()
                }
            })
            //Collision enemy <-> object
            this.enemies.forEach(enemy =>{
                if(collision(enemy,object)){
                    
                    switch(whichSideCollision(enemy,object)){
                        case "Left":
                            enemy.canMove.LEFT =false                        
                        break
                        case "Right":
                            enemy.canMove.RIGHT =false
                        break
                        case "Top":
                            enemy.canMove.UP = false
                        break
                        case "Bottom":
                            enemy.canMove.DOWN = false
                        break
                    }
                }
            
            })

        })

        this.tears.forEach(tear =>{
            //Collision tear <-> wall
            if(!collision(PlayfieldHitbox,tear)){
                tear.markToDelete()
            }
            //Collision tear <-> enemy
            this.enemies.forEach(enemy =>{
                if(collision(tear,enemy)){
                    tear.markToDelete()
                    enemy.dealDamage(tear)
                }   
            })
        })

        this.enemies.forEach(enemy =>{
            if(collision(enemy,this.player)){
                this.player.takeDamage()
                switch(whichSideCollision(enemy,this.player)){
                    case "Left":
                        enemy.canMove.LEFT =false                        
                    break
                    case "Right":
                        enemy.canMove.RIGHT =false
                    break
                    case "Top":
                        enemy.canMove.UP = false
                    break
                    case "Bottom":
                        enemy.canMove.DOWN = false
                    break
                }
            }
        })

        this.doors.forEach(door =>{
            if(collision(door,this.player) && !door.isBlocked){
                door.movePlayer(this.player)
                this.mapGenerator.loadRoom(door.id)
            }
        })
    }
}