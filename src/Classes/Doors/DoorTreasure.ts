import {
    ImgDoorTreasureRight,
    ImgDoorTreasureLeft,
    ImgDoorTreasureRightClosed,
    ImgDoorTreasureLeftClosed,
    ImgDoorTreasureDown,
    ImgDoorTreasureUp,
    ImgDoorTreasureUpClosed,
    ImgDoorTreasureDownClosed,

} from "../../Importer/ImageImporter"

import {Door} from "./Door";
import {ImgSize, ImgSource} from "../../Utils/Interfaces/Door";

type doorDirection = "up" | "down" | "left" | "right"

export class DoorTreasure extends Door {

    isClosed: boolean

    constructor(direction: doorDirection, id: number, initialState: boolean) {
        super(direction, id)
        this.isBlocked = initialState;
        this.isClosed = initialState
    }

    openDoor(keyAmount: number): boolean {
        if (this.isClosed) {
            if (keyAmount > 0) {
                this.isClosed = false
                this.isBlocked = false
                return true
            }
            return false
        }
    }

    update(delta: number, enemiesCount?: number): void {
        if (this.isClosed) {
            switch (this.direction) {
                case "up":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorUpClosed)
                    break
                case "down":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorDownClosed)
                    break
                case "left":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorLeftClosed)
                    break
                case "right":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorRightClosed)
                    break
            }
        } else {
            switch (this.direction) {
                case "up":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorUp)
                    break
                case "down":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorDown)
                    break
                case "left":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorLeft)
                    break
                case "right":
                    this.imageSource.changeSpriteSource(this.doorImageSource.imgDoorRight)
                    break
            }
        }
    }

    provideImageSources(): ImgSource {
        return {
            "imgDoorRight": ImgDoorTreasureRight,
            "imgDoorLeft": ImgDoorTreasureLeft,
            "imgDoorUp": ImgDoorTreasureUp,
            "imgDoorDown": ImgDoorTreasureDown,
            "imgDoorRightClosed": ImgDoorTreasureRightClosed,
            "imgDoorLeftClosed": ImgDoorTreasureLeftClosed,
            "imgDoorUpClosed": ImgDoorTreasureUpClosed,
            "imgDoorDownClosed": ImgDoorTreasureDownClosed,
        }
    }

    provideImageSizes(): ImgSize {
        return {
            down: {
                spriteWidth: 50,
                spriteHeight: 40,
                widthOffset: 50,
                heightOffset: 40,
            },
            left: {
                spriteWidth: 34,
                spriteHeight: 50,
                widthOffset: 50,
                heightOffset: 35,
            },
            right: {
                spriteWidth: 40,
                spriteHeight: 50,
                widthOffset: 50,
                heightOffset: 35,
            },
            up: {
                spriteWidth: 50,
                spriteHeight: 40,
                widthOffset: 50,
                heightOffset: 40,
            }
        }
    }
}