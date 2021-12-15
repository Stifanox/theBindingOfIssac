import { Animation, EntityInterface } from "../Utils/Interfaces";
import { Enemy } from "../Utils/Enemy";
import { Player } from "./Player";
import { Tear } from "./Tear";
import {collision, whichSideCollision} from "../Utils/UtilFunctions"
import { PlayfieldHitbox } from "../Utils/PlayfiledSize";
import { MovementActionObject } from "../Utils/Actions";
import { Door } from "./Door";
import { MapGeneration } from "../Utils/MapGeneration";
import { Item } from "../Utils/Item";
import { GUI } from "./GUI";
import { DoorTresure } from "./DoorTresure";
import { Pickup } from "../Utils/Pickup";
import { DoorBoss } from "./DoorBoss";
import { PlantedBomb } from "./PlantedBomb";
import { Rock } from "./Rock";

export class Collider implements Animation{
    player:Player
    enemies:Enemy[]
    objects:EntityInterface[]
    tears:Tear[]
    doors:(Door|DoorTresure|DoorBoss)[]
    items:Item[]
    pickups:Pickup[]
    mapGenerator:MapGeneration
    GUI:GUI
    showItemPopup:Function
    bombObjects:PlantedBomb[]
    constructor(player:Player, enemies:Enemy[], objects:EntityInterface[], tears:Tear[],doors:(Door|DoorTresure|DoorBoss)[],items:Item[],mapGenerator:MapGeneration,GUI:GUI,
                showItemPopup:Function,pickups:Pickup[],bombObjects:PlantedBomb[]) {
        this.player = player
        this.enemies = enemies
        this.objects = objects
        this.tears = tears
        this.doors = doors
        this.items = items
        this.mapGenerator = mapGenerator
        this.GUI = GUI
        this.showItemPopup = showItemPopup
        this.pickups = pickups
        this.bombObjects = bombObjects
    }

    draw(ctx?: CanvasRenderingContext2D): void {
    }

    update(): void {
        
        this.objects.forEach(object =>{
            //Collision object <-> player
            if(collision(object,this.player)) {
                if(object.constructor.name == "Rock" || object.constructor.name == "PlatformItem"){
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
                } else if (object.constructor.name == "Spikes"){
                    this.player.takeDamage()
                }
            }
            //Collision tear <-> object
            this.tears.forEach(tear =>{
                if(collision(tear,object)){
                    if(object.constructor.name == "Rock"){
                        tear.markToDelete()
                    }else if (object.constructor.name == "Spikes"){

                    }
                }
            })
            //Collision enemy <-> object
            this.enemies.forEach(enemy =>{
                if(collision(enemy,object) && !enemy.isFlying){
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
                if(enemy.added) this.player.takeDamage()
                enemy.added = true
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

        this.items.forEach(item =>{
            if(collision(item,this.player)){
                this.player.updateStats(item.statsToUpdate,item.itemsToGive)
                item.markToDelete()
                this.showItemPopup(item.itemName)
            }
        })

        this.doors.forEach(door =>{
            if(collision(door,this.player) && !door.isBlocked){
                if(door.constructor.name == "DoorTresure") {
                    if((door as DoorTresure).isClosed) {
                        if(this.player.playerPickup.keys > 0){
                            (door as DoorTresure).isClosed = false
                            this.player.playerPickup.keys -=1
                        }
                    }
                    else{
                        door.movePlayer(this.player)
                        this.mapGenerator.loadRoom(door.id)
                    }
                }
                else if(collision(door,this.player)){
                    door.movePlayer(this.player)
                    this.mapGenerator.loadRoom(door.id)
                }
                
            }
        })

        this.pickups.forEach(pickup =>{
            if(collision(this.player,pickup) && pickup.showItem){
                pickup.markToDelete()
                pickup.playMusic()
                this.player.addPickup(pickup)
            }
        })

        this.bombObjects.forEach(bomb =>{
            if(bomb.markForDeletion){
                this.enemies.forEach(enemy => {
                    if(collision(enemy,bomb)){
                        enemy.dealDamage(new Tear("left",1,1,{
                            damage:30,
                            tears:0,
                            range:0,
                            shotSpeed:0,
                            speed:0,
                            health:0,
                            currentHealth:0
                        }))
                    }  
                }
                )

                this.objects.forEach(object =>{
                    if(collision(bomb,object)){
                        if(object.constructor.name == "Rock") (object as Rock).markToDelete()
                    }
                })

                if(collision(this.player,bomb)){
                    this.player.takeDamage()
                }
            }
        })
    }
}