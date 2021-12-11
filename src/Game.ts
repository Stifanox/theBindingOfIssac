import { Collider } from "./Classes/Collider";
import { Enemy } from "./Classes/Enemy";
import { EnemyFollower } from "./Classes/EnemyFollower";
import { KeyboardControler } from "./Classes/KeyboardControler";
import { Player } from "./Classes/Player";
import { Rock } from "./Classes/Rock";
import { Tear } from "./Classes/Tear";
import { MovementActionObject, ShotActionObject } from "./Utils/Actions";
import { Animation, EntityInterface } from "./Utils/Interfaces";

//FIXME: Później generować kamienie w innej klasie
export class Game implements Animation{
    
    keyboardControler:KeyboardControler
    ctx:CanvasRenderingContext2D
    player:Player
    enemies: Enemy[]
    tears:Tear[]
    objects: EntityInterface[]
    collider:Collider
    constructor(ctx:CanvasRenderingContext2D){
        this.ctx = ctx
        //FIXME: DEBUG STATIC ENEMY
        this.enemies = [new EnemyFollower()]
        //FIXME: DEBUG STATIC ENEMY
        this.tears = []
        //FIXME: DEBUG STATIC ROCK
        this.objects = [new Rock(500,300),new Rock(150,150)]
        //FIXME: DEBUG STATIC ROCK
        this.player= new Player(this.tears)
        this.collider = new Collider(this.player,this.enemies,this.objects,this.tears)
        this.keyboardControler = new KeyboardControler(MovementActionObject,ShotActionObject)
        
    }
    
    /**
     * Draw all possible entities
     */
    draw(): void {
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
        //FIXME:DEBUG
        this.collider.draw(this.ctx)
        //FIXME:DEBUG
    }
    /**
     * Updates all possible entities
     * @param delta time between two rendered frames
     */
    update(delta:number): void {
        this.collider.update()

        this.player.update(delta)
        this.enemies.forEach(enemy =>{
            if(enemy.markForDeletion) this.enemies.splice(this.enemies.indexOf(enemy),1)
            enemy.update(delta)
        })
        this.tears.forEach(tear =>{
            if(tear.markForDeletion) this.tears.splice(this.tears.indexOf(tear),1)
            tear.update(delta)
        })


    }
}