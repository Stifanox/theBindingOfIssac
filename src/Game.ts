import { Collider } from "./Classes/Collider";
import { Enemy } from "./Utils/Enemy";

import { KeyboardControler } from "./Classes/KeyboardControler";
import { Player } from "./Classes/Player";
import { Rock } from "./Classes/Rock";
import { Tear } from "./Classes/Tear";
import { MovementActionObject, ShotActionObject } from "./Utils/Actions";
import { Animation, EntityInterface } from "./Utils/Interfaces";
import { EnemyFatty } from "./Classes/EnemyFatty";
import { EnemyFollower } from "./Classes/EnemyFollower";
import { GUI } from "./Classes/GUI";
import { MapGeneration } from "./Utils/MapGeneration";
import { Door } from "./Classes/Door";

//FIXME: Później generować kamienie w innej klasie
export class Game implements Animation{
    
    keyboardControler:KeyboardControler
    ctx:CanvasRenderingContext2D
    player:Player
    enemies: Enemy[]
    tears:Tear[]
    objects: EntityInterface[]
    doors:Door[]
    collider:Collider
    GUI:GUI
    mapGenerator:MapGeneration
    constructor(ctx:CanvasRenderingContext2D){

        let string:string 
        for(let i=1;i<12; i++){
            string += `new Rock(${100+(i*65)},100),`
        }
        
        this.ctx = ctx
        //FIXME: DEBUG STATIC ENEMY
        this.enemies = []
        //FIXME: DEBUG STATIC ENEMY
        this.tears = []
        //FIXME: DEBUG STATIC ROCK
        this.objects = []
        //FIXME: DEBUG STATIC ROCK
        this.doors = [new Door("down",1),new Door("up",1),new Door("left",1),new Door("right",1)]
        this.player= new Player(this.tears)
        this.mapGenerator = new MapGeneration(this.enemies,this.objects,this.doors)
        this.collider = new Collider(this.player,this.enemies,this.objects,this.tears,this.doors,this.mapGenerator)
        this.keyboardControler = new KeyboardControler(MovementActionObject,ShotActionObject)
        this.GUI = new GUI(this.player.playerStats,this.player.playerPickup)
        
        //require to have Minecraft font downloaded
        this.ctx.fillStyle = "white"
        this.ctx.font = "25px Minecraft"
        
        this.mapGenerator.loadRoom(1)
    }
    
    /**
     * Draw all possible entities
     */
    draw(): void {
        this.doors.forEach(door => door.draw(this.ctx))
        this.enemies.forEach(enemy =>{
            enemy.draw(this.ctx)
        })
        this.tears.forEach(tear =>{
            tear.draw(this.ctx)
        })
        this.objects.forEach(object =>{
            object.draw(this.ctx)
        })
        
        this.player.draw(this.ctx)

        this.GUI.draw(this.ctx)
    }
    /**
     * Updates all possible entities
     * @param delta Time between two rendered frames
     */
    update(delta:number): void {
        this.collider.update()

        this.player.update(delta)
        this.enemies.forEach(enemy =>{
            if(enemy.markForDeletion) this.enemies.splice(this.enemies.indexOf(enemy),1)
            enemy.update(delta,this.player.x,this.player.y)
        })
        this.tears.forEach(tear =>{
            if(tear.markForDeletion) this.tears.splice(this.tears.indexOf(tear),1)
            tear.update(delta)
        })
        this.doors.forEach(door => door.update(delta,this.enemies.length))
        this.GUI.update(delta)

        //Death of player
        if(this.player.playerStats.currentHealth <= 0) {}
    }
}