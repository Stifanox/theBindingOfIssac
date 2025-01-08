import { Enemy } from "../../Utils/Enemy";
import { AnimationObjectCreate } from "../Animation/AnimationObjectCreate";
import { SpriteAnimator } from "../Animation/SpriteAnimator";
import { ImgBossDuke } from "../../Importer/ImageImporter"
import { PlayfieldSize } from "../../Utils/PlayfiledSize";
import { EnemyFly } from "./EnemyFly";

export class BossDukeOfFly extends Enemy {

    internalTimer: number
    enemies: Enemy[]
    canSpawnFlies: boolean
    type: string

    constructor(x: number, y: number, enemies: Enemy[]) {
        super(-0.15, -0.15, new SpriteAnimator([new AnimationObjectCreate(ImgBossDuke, 72, 72, false, 3, 76, "duke_attack", 16, 0)]), x, y, 300)
        this.width = 150
        this.height = 150
        this.hitboxHeight = this.height
        this.hitboxWidth = this.width
        this.internalTimer = 0
        this.canHaveKnockback = false
        this.enemies = enemies
        this.canSpawnFlies = true
        this.type = "boss"
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        super.draw(ctx)
    }

    update(delta: number, playerX?: number, playerY?: number): void {
        super.update(delta, playerX, playerY)
        super.updateHitboxPosition(0, 0)
        this.internalTimer += delta


        if (this.internalTimer > 2500) {
            if (this.canSpawnFlies) {
                this.canSpawnFlies = false
                setTimeout(this.spawnFlies.bind(this), 500)
            }

            this.imageSource.update(delta, "duke_attack", 250)
            setTimeout(() => { this.internalTimer = 0; this.imageSource.update(delta); this.canSpawnFlies = true }, 1000)
        }

        if (this.y < PlayfieldSize.upperY) this.vy = Math.abs(this.vy)
        if (this.y + 100 > PlayfieldSize.downY) this.vy = -Math.abs(this.vy)
        if (this.x < PlayfieldSize.downX) this.vx = Math.abs(this.vx)
        if (this.x + 100 > PlayfieldSize.upperX) this.vx = -Math.abs(this.vx)

        this.y += this.vy * delta
        this.x += this.vx * delta
    }

    private spawnFlies() {
        const randomPush = Math.floor(Math.random() * 3 + 1)
        for (let i = 0; i < randomPush; i++) {
            this.enemies.push(new EnemyFly(this.x + (Math.random() * 50), this.y + (Math.random() * 50)))
        }
    }
}