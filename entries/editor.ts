import { Game } from "../src/Game"
import basementRoom from "@img/basement_one_room.png"
import {Editor} from "../src/Editor/Editor";
import {GroupSelectorDom} from "../src/Editor/GroupSelectorDom";
const canvas = document.querySelector("#editor") as HTMLCanvasElement
const canvasEditor = document.querySelector("#selector") as HTMLCanvasElement
canvas.width = 1000
canvas.height = 650

canvasEditor.width = 800
canvasEditor.height = window.innerHeight - 20
// playable field 784/443

const img = new Image(canvas.width,canvas.height)
img.src = basementRoom


const ctx = canvas.getContext("2d")
const editorCtx = canvasEditor.getContext("2d")

let previousTime:number = 0
const game:Game = new Game(ctx, true)
const editor = new Editor(editorCtx)

let request:number = null
function animate(timestamp:number){
    //rysuje pokój jako tło
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(img,0,0,canvas.width,canvas.height)

    // clear editor
    editorCtx.clearRect(0,0,canvas.width,canvas.height)

    game.draw()
    editor.draw()
    request = requestAnimationFrame(animate)
}

animate(0)