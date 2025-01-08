type ImgSource = {
    [key: string]: string
}

type ImgSizeInfo = {
    spriteWidth: number
    spriteHeight: number
    widthOffset:number
    heightOffset:number
}

type ImgSize = {
    up: ImgSizeInfo
    down: ImgSizeInfo
    left: ImgSizeInfo
    right: ImgSizeInfo
}

interface DifferentSprites{
    provideImageSources(): ImgSource
    provideImageSizes(): ImgSize
}

export {DifferentSprites, ImgSource, ImgSize, ImgSizeInfo}