import { Game } from "./src/Game"

const canvas = document.querySelector("#game") as HTMLCanvasElement

canvas.width = 800
canvas.height = 650
const ctv = canvas.getContext("2d")

let previoseTime:number = 0
const game:Game = new Game()

function animate(timestamp:number){
    const delta = timestamp - previoseTime
    previoseTime = timestamp 
    game.draw()
    game.update(delta)
    requestAnimationFrame(animate)
}

animate(0)