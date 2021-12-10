import {Hitbox} from "./Interfaces";

export function collision(first:Hitbox, second:Hitbox){
    if(!(first.hasOwnProperty("hitboxX") && first.hasOwnProperty("hitboxY") && first.hasOwnProperty("hitboxWidth") && first.hasOwnProperty("hitboxHeight"))) 
       throw new Error(`First object doesn't have required keys. Check if you implemented all keys in class ${first.constructor.name}`)

    if(!(second.hasOwnProperty("hitboxX") && second.hasOwnProperty("hitboxY") && second.hasOwnProperty("hitboxWidth") && second.hasOwnProperty("hitboxHeight"))) 
       throw new Error(`Second object doesn't have required keys. Check if you implemented all keys in class ${second.constructor.name}`)

    if( !(first.hitboxX > second.hitboxX + second.hitboxWidth ||
        first.hitboxX + first.hitboxWidth < second.hitboxX ||
        first.hitboxY > second.hitboxY + second.hitboxHeight ||
        first.hitboxY + first.hitboxHeight<second.hitboxY)
    ) return true
}