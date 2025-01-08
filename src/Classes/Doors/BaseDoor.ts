import {
    ImgDoorUp,
    ImgDoorDown,
    ImgDoorRight,
    ImgDoorLeft,
    ImgDoorUpClosed,
    ImgDoorDownClosed,
    ImgDoorRightClosed,
    ImgDoorLeftClosed,
} from "../../Importer/ImageImporter"

import {Door, DoorDirection} from "./Door";
import {ImgSize, ImgSource} from "src/Utils/Interfaces/Door";

export class BaseDoor extends Door {

    constructor(direction: DoorDirection, id: number) {
        super(direction, id)
    }

    provideImageSources(): ImgSource {
        return {
            "imgDoorUpClosed": ImgDoorUpClosed,
            "imgDoorDownClosed": ImgDoorDownClosed,
            "imgDoorLeftClosed": ImgDoorLeftClosed,
            "imgDoorRightClosed": ImgDoorRightClosed,
            "imgDoorUp": ImgDoorUp,
            "imgDoorDown": ImgDoorDown,
            "imgDoorLeft": ImgDoorLeft,
            "imgDoorRight": ImgDoorRight,
        }
    }

    provideImageSizes(): ImgSize {
        return {
            down: {
                spriteWidth: 50,
                spriteHeight: 34,
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
                spriteWidth: 34,
                spriteHeight: 50,
                widthOffset: 50,
                heightOffset: 35,
            },
            up: {
                spriteWidth: 50,
                spriteHeight: 34,
                widthOffset: 50,
                heightOffset: 40,
            }
        }
    }

}