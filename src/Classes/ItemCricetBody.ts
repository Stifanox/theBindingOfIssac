import { Item } from "../Utils/Item";
import cricet_body from "../../Img/cricket_body.png"

export class ItemCricetHead extends Item{
    constructor(x:number,y:number) {
        super(cricet_body,24,24,54,54,x,y)
        this.statsToUpdate ={
            damage:10,
            tears:100,
            range:100,
            shotSpeed:-0.1,
            speed:0.1,
            health:0,
            currentHealth:0
        }
        this.itemName = "Cricket's body"
    }
}