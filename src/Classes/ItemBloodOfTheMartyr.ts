import { Item } from "../Utils/Item";
import blood_of_the_martyr from "../../Img/blood_of_the_martyr.png"

export class ItemBloodOfTheMartyr extends Item {
    constructor(x:number,y:number) {
        super(blood_of_the_martyr,30,24,54,54,x,y)
        this.statsToUpdate ={
            damage:5,
            tears:300,
            range:100,
            shotSpeed:0,
            speed:0,
            health:2,
            currentHealth:2
        }
        this.itemName = "Blood of the Martyr"
    }

    update(delta: number): void {
        super.update(delta)
        this.hitboxUpdate(-7)
    }
}