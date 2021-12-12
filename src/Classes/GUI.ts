import { Animation, PlayerPickup, PlayerStats } from "../Utils/Interfaces";
import full_heart from "../../Img/full_heart.png"
import half_heart from "../../Img/half_heart.png"
import empty_heart from "../../Img/empty_heart.png"
import bomb from "../../Img/bomb.png"
import coin from "../../Img/coin.png"
import key from "../../Img/key.png"
export class GUI implements Animation{

    playerStats:PlayerStats;
    playerPickup:PlayerPickup

    constructor(playerStats:PlayerStats,playerPickup:PlayerPickup){
        this.playerPickup = playerPickup
        this.playerStats = playerStats
    }

    draw(ctx?: CanvasRenderingContext2D): void {
        this.manageHearts(ctx)
        this.manageCoins(ctx)
        this.manageBombs(ctx)
        this.manageKeys(ctx)
    }

    update(delta: number): void {}
    
    private manageHearts(ctx: CanvasRenderingContext2D){
        const fullHearts = Math.trunc(this.playerStats.currentHealth)
        const halfHeart = this.playerStats.currentHealth % 1 != 0? true : false
        const emptyHeart = Math.trunc(this.playerStats.health - this.playerStats.currentHealth)
        
        for(let i=0;i<fullHearts; i++){
            const img = new Image(40,40)
            img.src = full_heart
            ctx.drawImage(img,40 +(i*40) ,40,40,40)
        }

        if(halfHeart){
            const img = new Image(40,40)
            img.src = half_heart
            ctx.drawImage(img,40 +(fullHearts*40) ,40,40,40)
        }

        for(let i=0;i<emptyHeart; i++){
            const offset = halfHeart? fullHearts+1 : fullHearts

            const img = new Image(40,40)
            img.src = empty_heart
            ctx.drawImage(img,40 + (offset*40) +(i*40) ,40,40,40)
        }

    }

    private manageBombs(ctx?: CanvasRenderingContext2D){
        const img = new Image(30,30)
        img.src = bomb
        
        ctx.drawImage(img,40,140,30,30)
        ctx.fillText(`${this.playerPickup.bombs}`,80,167)
    }

    private manageCoins(ctx?: CanvasRenderingContext2D){
        const img = new Image(30,30)
        img.src = coin
        ctx.drawImage(img,42,110,30,30)
        ctx.fillText(`${this.playerPickup.coins}`,80,133)
    }

    private manageKeys(ctx?: CanvasRenderingContext2D){
        const img = new Image(30,30)
        img.src = key
        ctx.drawImage(img,47,175,20,30)
        ctx.fillText(`${this.playerPickup.keys}`,80,202)
    }
}