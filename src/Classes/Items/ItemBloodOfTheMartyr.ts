import { Item } from "../../Utils/Item";
import { ImgBloodOfTheMartyr } from "../../Importer/ImageImporter"

export class ItemBloodOfTheMartyr extends Item {
    constructor(x: number, y: number) {
        super(ImgBloodOfTheMartyr, 30, 24, 54, 54, x, y)
        this.statsToUpdate = {
            damage: 5,
            tears: 300,
            range: 100,
            shotSpeed: 0,
            speed: 0,
            health: 2,
            currentHealth: 2
        }
        this.itemName = "Blood of the Martyr"
    }

    update(delta: number): void {
        super.update(delta)
        this.hitboxUpdate(-7)
    }
}