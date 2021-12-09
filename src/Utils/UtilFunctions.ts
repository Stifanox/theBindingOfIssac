import { EntityInterface} from "./Interfaces";

export function collision(first:EntityInterface, second:EntityInterface){
    if( !(first.x > second.x + second.hitboxWidth ||
        first.x + first.hitboxWidth < second.x ||
        first.y > second.y + second.hitboxHeight ||
        first.y + first.hitboxHeight<second.y)
    ) return true
}