import {EntityFactory} from "../../Utils/Interfaces/EntityFactory";
import {EntityInterface} from "../../Utils/Interfaces";
import {Rock} from "../../Classes/Objects/Rock";
import {Spikes} from "../../Classes/Objects/Spikes";

export class ObjectFactory implements EntityFactory {
    createEntity(entityName: string): EntityInterface {
        switch (entityName) {
            case 'Rock':
                return new Rock(0, 0)
            case 'Spikes':
                return new Spikes(0, 0)
        }
    }

}