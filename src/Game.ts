import {Collider} from "./Classes/Collider";
import {Enemy} from "./Utils/Enemy";

import {KeyboardControler} from "./Classes/Player/KeyboardControler";
import {Player} from "./Classes/Player/Player";
import {Tear} from "./Classes/Player/Tear";
import {MovementActionObject, ShotActionObject} from "./Utils/Actions";
import {Animation, EntityInterface, Music} from "./Utils/Interfaces";
import {GUI} from "./Classes/Gui/GUI";
import {MapGeneration} from "./Utils/MapGeneration";
import {BaseDoor} from "./Classes/Doors/BaseDoor";
import {Item} from "./Utils/Item";
import {enemies} from "./Utils/Floor";
import {DoorTreasure} from "./Classes/Doors/DoorTreasure";
import {Pickup} from "./Utils/Pickup";
import {DoorBoss} from "./Classes/Doors/DoorBoss";
import {PlantedBomb} from "./Classes/Pickups/PlantedBomb";
import {Rock} from "./Classes/Objects/Rock";
import soundtrack from "../assets/sacrificial.mp3"

export class Game implements Animation, Music {

    keyboardController: KeyboardControler
    ctx: CanvasRenderingContext2D
    player: Player
    enemies: Enemy[]
    tears: Tear[]
    objects: EntityInterface[]
    doors: (BaseDoor | DoorTreasure | DoorBoss)[]
    items: Item[]
    pickups: Pickup[]
    collider: Collider
    GUI: GUI
    mapGenerator: MapGeneration
    showPopup: boolean
    itemName: string;
    bombObjects: PlantedBomb[]
    audio: HTMLAudioElement;
    isPlayed: boolean

    constructor(ctx: CanvasRenderingContext2D) {

        this.ctx = ctx
        this.enemies = enemies
        this.tears = []
        this.objects = []
        this.doors = []
        this.items = []
        this.pickups = []
        this.bombObjects = []
        this.player = new Player(this.tears)
        this.mapGenerator = new MapGeneration(this.enemies, this.objects, this.doors, this.items, this.pickups, this.tears, this.bombObjects)
        this.keyboardController = new KeyboardControler(MovementActionObject, ShotActionObject, this.player, this.bombObjects)
        this.GUI = new GUI(this.player.playerStats, this.player.playerPickup, this.ctx, this.enemies)
        this.collider = new Collider(this.player, this.enemies, this.objects, this.tears, this.doors, this.items, this.mapGenerator, this.GUI, this.showItemPopup.bind(this), this.pickups, this.bombObjects)
        this.mapGenerator.loadRoom(1)

        this.showPopup = false

        this.itemName = ""
        this.ctx.font = "25px upheavtt"
        this.ctx.fillStyle = "white"
        this.audio = new Audio(soundtrack)
        this.audio.loop = true
        this.audio.volume = 0.05
        this.isPlayed = false
    }

    playMusic(): void {
        this.audio.play()
    }

    /**
     * Draw all possible entities
     */
    draw(): void {
        this.doors.forEach(door => door.draw(this.ctx))

        this.objects.forEach(object => {
            object.draw(this.ctx)
        })
        this.pickups.forEach(pickem => pickem.draw(this.ctx))

        this.tears.forEach(tear => {
            tear.draw(this.ctx)
        })
        this.enemies.forEach(enemy => {
            enemy.draw(this.ctx)
        })
        this.items.forEach(item => item.draw(this.ctx))
        this.bombObjects.forEach(bomb => bomb.draw(this.ctx))
        this.player.draw(this.ctx)

        this.GUI.draw(this.ctx)
    }

    /**
     * Updates all possible entities
     * @param delta Time between two rendered frames
     * @param requestId Used to end game and stop game loop
     */
    update(delta: number, requestId?: number): void {
        if (!this.isPlayed) {
            this.playMusic()
        }
        this.collider.update()

        this.player.update(delta)

        this.enemies.forEach(enemy => {
            if (enemy.markForDeletion) {
                //End the game
                if (enemy.constructor.name == "BossDukeOfFly") {
                    this.ctx.fillStyle = "black"
                    this.ctx.fillRect(0, 0, 1000, 650)
                    this.ctx.fillStyle = "white"
                    this.ctx.fillText("You have won", 100, 100)
                    cancelAnimationFrame(requestId)
                } else {
                    this.enemies.splice(this.enemies.indexOf(enemy), 1)
                }
            }
            enemy.update(delta, this.player.x, this.player.y)
        })

        this.tears.forEach(tear => {
            if (tear.markForDeletion) this.tears.splice(this.tears.indexOf(tear), 1)
            tear.update(delta)
        })
        this.doors.forEach(door => door.update(delta, this.enemies.length))

        this.items.forEach(item => {
            if (item.markForDeletion) this.items.splice(this.items.indexOf(item), 1)
            item.update(delta)
        })
        this.bombObjects.forEach(bomb => {
            if (bomb.markForDeletion) this.bombObjects.splice(this.bombObjects.indexOf(bomb), 1)
            bomb.update(delta)
        })

        this.GUI.update(delta)

        this.objects.forEach(object => {
            if (object.constructor.name == "Rock") {
                if ((object as Rock).markForDeletion) this.objects.splice(this.objects.indexOf(object), 1)
            }
        })
        if (this.showPopup) {
            this.GUI.showPickedItem(this.itemName)
        }
        this.pickups.forEach(pickup => {
            if (pickup.markForDeletion) this.pickups.splice(this.pickups.indexOf(pickup), 1)
            pickup.update(delta, this.enemies.length)
        })

        //Death of player
        if (this.player.playerStats.currentHealth <= 0) {
            this.ctx.fillStyle = "black"
            this.ctx.fillRect(0, 0, 1000, 650)
            this.ctx.fillStyle = "white"
            this.ctx.fillText("You died", 100, 100)
            cancelAnimationFrame(requestId)
        }
    }

    showItemPopup(itemName: string) {
        this.itemName = itemName
        this.showPopup = true
        setTimeout(() => {
            this.showPopup = false
        }, 2000)
    }
}