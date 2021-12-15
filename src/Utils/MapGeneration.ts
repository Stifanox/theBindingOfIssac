import { Door } from "../Classes/Door";
import { DoorBoss } from "../Classes/DoorBoss";
import { DoorTresure } from "../Classes/DoorTresure";
import { PlantedBomb } from "../Classes/PlantedBomb";
import { Tear } from "../Classes/Tear";
import { Enemy } from "./Enemy";
import { floor } from "./Floor";
import { EntityInterface, Room } from "./Interfaces";
import { Item } from "./Item";
import { Pickup } from "./Pickup";

export class MapGeneration{
    floor:Room[]
    enemies:Enemy[]
    objects:EntityInterface[]
    doors:(Door|DoorTresure|DoorBoss)[]
    items:Item[]
    pickups:Pickup[]
    tears:Tear[]
    bombObjects:PlantedBomb[]
    constructor(enemies:Enemy[],objects:EntityInterface[],doors:(Door|DoorTresure|DoorBoss)[],items:Item[],pickups:Pickup[],tears:Tear[],bombObjects:PlantedBomb[]) {
        this.floor = floor
        this.enemies = enemies
        this.objects = objects
        this.doors = doors
        this.items = items
        this.pickups = pickups
        this.tears = tears
        this.bombObjects = bombObjects
    }

    loadRoom(id:number){
        const foundRoom = this.floor.find(el => el.id == id)
        this.enemies.length = 0
        this.doors.length = 0 
        this.objects.length = 0
        this.items.length = 0
        this.pickups.length = 0
        this.tears.length = 0
        this.bombObjects.length = 0

        this.items.push(...foundRoom.items)
        this.enemies.push(...foundRoom.enemies)
        this.doors.push(...foundRoom.doors)
        this.objects.push(...foundRoom.objects)
        this.pickups.push(...foundRoom.pickups)
    }
}