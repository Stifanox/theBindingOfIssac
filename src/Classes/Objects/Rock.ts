import {EntityInterface, Music, Removeable} from "../../Utils/Interfaces";
import {AnimationObjectCreate} from "../Animation/AnimationObjectCreate";
import {SpriteAnimator} from "../Animation/SpriteAnimator";
import {ImgRock} from "../../Importer/ImageImporter"
import {SoundBreakRock} from '../../Importer/SoundImporter'

export class Rock implements EntityInterface, Removeable, Music {
    vx: number;
    vy: number;
    imageSource: SpriteAnimator;
    hitboxWidth: number;
    hitboxHeight: number;
    width: number;
    height: number;
    x: number;
    y: number;
    hitboxX: number;
    hitboxY: number;
    markForDeletion: boolean;
    audio: HTMLAudioElement;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.width = 70
        this.height = 70
        this.hitboxX = this.x + 7
        this.hitboxY = this.y + 7
        this.hitboxHeight = this.height - 13
        this.hitboxWidth = this.width - 15
        this.imageSource = new SpriteAnimator([new AnimationObjectCreate(ImgRock, 32, 32, true, 0, 0, "static", 0, 0)])
        this.markForDeletion = false
        this.audio = new Audio(SoundBreakRock)
        this.audio.volume = 0.15
    }

    playMusic(): void {
        this.audio.play()
    }

    markToDelete(): void {
        this.markForDeletion = true
        this.playMusic()

    }

    draw(ctx?: CanvasRenderingContext2D): void {
        this.imageSource.draw(ctx, this.x, this.y, this.width, this.height)
    }

    update(): void {
    }

}