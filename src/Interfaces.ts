export interface Position{
    x:number
    y:number
}

export interface Animation{
    draw(): void
    update(delta:number): void
}
export interface EntityInterface extends Position, Animation{
    vx:number
    vy:number
    imageSource:typeof Image
    hitboxWidth:number
    hitboxHeight:number
    spriteWidth:number
    spriteHeight:number
    width:number
    height:number
    frameX?:number
    frame?:number
}