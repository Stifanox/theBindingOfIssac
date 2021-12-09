import { Game } from "./src/Game"
import basementRoom from "./Img/basement_one_room.png"
const canvas = document.querySelector("#game") as HTMLCanvasElement
canvas.width = 1000
canvas.height = 650

const img = new Image(canvas.width,canvas.height)
img.src = basementRoom


const ctx = canvas.getContext("2d")

let previoseTime:number = 0
const game:Game = new Game(ctx)

//FIXME: później dynamicznie zmieniać background w jakieś klasie żeby był pokój
function animate(timestamp:number){
    //rysuje pokój jako tło
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
    const delta = timestamp - previoseTime
    previoseTime = timestamp 
    game.draw()
    game.update(delta)
    requestAnimationFrame(animate)
}

animate(0)