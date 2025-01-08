import { Item } from "../../Utils/Item";
import { ImgItemBoom } from "../../Importer/ImageImporter"

export class ItemBoom extends Item {
    constructor(x: number, y: number) {
        super(ImgItemBoom, 29, 26, 50, 50, x, y)

        this.itemsToGive = {
            coins: 0,
            bombs: 10,
            keys: 0
        }

        this.itemName = "Boom"
    }
    update(delta: number): void {
        super.update(delta)
        this.hitboxUpdate(-10)
    }
}