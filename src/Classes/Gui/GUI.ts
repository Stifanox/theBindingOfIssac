import { Animation, PlayerPickup, PlayerStats } from "../../Utils/Interfaces";
import {
    ImgBomb, ImgCoin, ImgKey,
    ImgBackgroundItem,
    ImgBossBar,
    ImgFullHeart,
    ImgHalfHeart,
    ImgEmptyHeart,
} from "../../Importer/ImageImporter"
import { Enemy } from "../../Utils/Enemy";

export class GUI implements Animation {

    playerStats: PlayerStats;
    playerPickup: PlayerPickup
    ctx: CanvasRenderingContext2D
    showItemPopup: Function
    enemies: Enemy[]
    bossBar: HTMLImageElement;
    constructor(playerStats: PlayerStats, playerPickup: PlayerPickup, ctx: CanvasRenderingContext2D, enemies: Enemy[]) {
        this.playerPickup = playerPickup
        this.playerStats = playerStats
        this.ctx = ctx
        this.enemies = enemies
        this.bossBar = new Image(100, 100)
        this.bossBar.src = ImgBossBar
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        this.manageHearts(ctx)
        this.manageCoins(ctx)
        this.manageBombs(ctx)
        this.manageKeys(ctx)
        this.manageBoss(ctx)
    }

    update(delta: number): void { }

    private manageBoss(ctx: CanvasRenderingContext2D) {
        this.enemies.forEach(enemy => {
            if (enemy.type == "boss") this.drawHealth(ctx, enemy)
        })
    }

    private drawHealth(ctx: CanvasRenderingContext2D, enemy: Enemy) {
        ctx.save()
        ctx.fillStyle = "red"
        ctx.fillRect(380, 540, 252 * (enemy.health / enemy.maxHealth), 25)
        ctx.drawImage(this.bossBar, 340, 520, 300, 70)
        ctx.restore()
    }

    private manageHearts(ctx: CanvasRenderingContext2D) {
        const fullHearts = Math.trunc(this.playerStats.currentHealth)
        const halfHeart = this.playerStats.currentHealth % 1 != 0
        const emptyHeart = Math.trunc(this.playerStats.health - this.playerStats.currentHealth)

        for (let i = 0; i < fullHearts; i++) {
            const img = new Image(40, 40)
            img.src = ImgFullHeart
            ctx.drawImage(img, 40 + (i * 40), 40, 40, 40)
        }

        if (halfHeart) {
            const img = new Image(40, 40)
            img.src = ImgHalfHeart
            ctx.drawImage(img, 40 + (fullHearts * 40), 40, 40, 40)
        }

        for (let i = 0; i < emptyHeart; i++) {
            const offset = halfHeart ? fullHearts + 1 : fullHearts

            const img = new Image(40, 40)
            img.src = ImgEmptyHeart
            ctx.drawImage(img, 40 + (offset * 40) + (i * 40), 40, 40, 40)
        }

    }

    private manageBombs(ctx?: CanvasRenderingContext2D) {
        const img = new Image(30, 30)
        img.src = ImgBomb

        ctx.drawImage(img, 40, 140, 30, 30)
        ctx.fillText(`${this.playerPickup.bombs}`, 80, 167)
    }

    private manageCoins(ctx?: CanvasRenderingContext2D) {
        const img = new Image(30, 30)
        img.src = ImgCoin
        ctx.drawImage(img, 42, 110, 30, 30)
        ctx.fillText(`${this.playerPickup.coins}`, 80, 133)
    }

    private manageKeys(ctx?: CanvasRenderingContext2D) {
        const img = new Image(30, 30)
        img.src = ImgKey
        ctx.drawImage(img, 47, 175, 20, 30)
        ctx.fillText(`${this.playerPickup.keys}`, 80, 202)
    }

    showPickedItem(itemName: string) {
        const img = new Image(0, 0)
        const messure = this.ctx.measureText(itemName)
        const left = (1000 - messure.width) / 2
        img.src = ImgBackgroundItem
        this.ctx.drawImage(img, 50, 55, 900, 100)
        this.ctx.fillText(itemName, left, 110)
    }
}