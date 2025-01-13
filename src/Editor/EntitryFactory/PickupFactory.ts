import { EntityInterface } from "src/Utils/Interfaces";
import {EntityFactory} from "../../Utils/Interfaces/EntityFactory";
import {Bomb} from "../../Classes/Pickups/Bomb";
import {Coin} from "../../Classes/Pickups/Coin";
import {Heart} from "../../Classes/Pickups/Heart";

export class PickupFactory implements EntityFactory {
    createEntity(entityName: string): EntityInterface {
        switch (entityName) {
            case 'Bomb':
                return new Bomb(0,0)
            case 'Coin':
                return new Coin(0,0)
            case 'Heart':
                return new Heart(0,0)
        }
    }

}