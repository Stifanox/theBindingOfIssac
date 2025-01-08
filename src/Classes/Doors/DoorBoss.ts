import {
    ImgDoorBossRight,
    ImgDoorBossLeft,
    ImgDoorBossRightClosed,
    ImgDoorBossLeftClosed,
    ImgDoorBossUp,
    ImgDoorBossDown,
    ImgDoorBossDownClosed,
    ImgDoorBossUpClosed

} from "../../Importer/ImageImporter"

import {Door} from "./Door";
import {ImgSize, ImgSource} from "src/Utils/Interfaces/Door";

type doorDirection = "up" | "down" | "left" | "right"

export class DoorBoss extends Door {

    constructor(direction: doorDirection, id: number) {
        super(direction, id)
    }

    provideImageSources(): ImgSource {
        return {
            "imgDoorRight": ImgDoorBossRight,
            "imgDoorLeft": ImgDoorBossLeft,
            'imgDoorUp': ImgDoorBossUp,
            'imgDoorDown': ImgDoorBossDown,
            "imgDoorRightClosed": ImgDoorBossRightClosed,
            "imgDoorLeftClosed": ImgDoorBossLeftClosed,
            "imgDoorUpClosed": ImgDoorBossUpClosed,
            "imgDoorDownClosed": ImgDoorBossDownClosed,
        }
    }

    provideImageSizes(): ImgSize {
        console.log(this)
        return {
            down: {
                spriteWidth: 70,
                spriteHeight: 42,
                widthOffset: 50,
                heightOffset: 40,
            },
            left: {
                spriteWidth: 37,
                spriteHeight: 65,
                widthOffset: 50,
                heightOffset: 40,
            },
            right: {
                spriteWidth: 34,
                spriteHeight: 65,
                widthOffset: 50,
                heightOffset: 40,
            },
            up: {
                spriteWidth: 70,
                spriteHeight: 42,
                widthOffset: 50,
                heightOffset: 40,
            }
        }
    }

}