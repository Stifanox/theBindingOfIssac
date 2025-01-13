import {EntityInterface} from "../Interfaces";

export interface EntityFactory {
    createEntity(entityName:string): EntityInterface
}