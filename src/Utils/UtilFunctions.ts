import {EntityInterface, Hitbox} from "./Interfaces";

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

export function whichSideCollision(entity:EntityInterface,object:EntityInterface){
    const entityHalfWidth = entity.hitboxWidth/2
    const entityHalfHeight = entity.hitboxHeight/2

    const objectHalfWidth = object.hitboxWidth/2
    const objectHalfHeight = object.hitboxHeight/2

    const entityCenterX = entity.hitboxX + entity.hitboxWidth/2
    const entityCenterY = entity.hitboxY + entity.hitboxHeight/2

    const objectCenterX = object.hitboxX + object.hitboxWidth/2
    const objectCenterY = object.hitboxY + object.hitboxHeight/2

    const diffX = entityCenterX - objectCenterX
    const diffY = entityCenterY - objectCenterY

    const minXDist = entityHalfWidth + objectHalfWidth
    const minYDist = entityHalfHeight + objectHalfHeight

    const depthX = diffX>0 ? minXDist - diffX : -minXDist-diffX
    const depthY = diffY>0 ? minYDist - diffY : -minYDist-diffY

    if(depthX !=0 && depthY !=0){
        if(Math.abs(depthX)<Math.abs(depthY)){
            if(depthX>0){
                return "Left"
            }
            else{
                return "Right"
            }
        }
        else{
            if(depthY>0){
                return "Top"
            }
            else{
                return "Bottom"
            }
        }
    }
}