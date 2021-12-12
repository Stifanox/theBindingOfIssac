import { Door } from "../Classes/Door";
import { Enemy } from "./Enemy";
import { floor } from "./Floor";
import { EntityInterface, Room } from "./Interfaces";

export class MapGeneration{
    floor:Room[]
    enemies:Enemy[]
    objects:EntityInterface[]
    doors:Door[]

    constructor(enemies:Enemy[],objects:EntityInterface[],doors:Door[]) {
        this.floor = floor
        this.enemies = enemies
        this.objects = objects
        this.doors = doors
    }

    loadRoom(id:number){
        const foundRoom = this.floor.find(el => el.id == id)

        this.enemies.length = 0
        this.doors.length = 0 
        this.objects.length = 0

        this.enemies.push(...foundRoom.enemies)
        this.doors.push(...foundRoom.doors)
        this.objects.push(...foundRoom.objects)
    }
}