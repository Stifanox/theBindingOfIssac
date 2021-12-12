import { Door } from "../Classes/Door";
import { EnemyFatty } from "../Classes/EnemyFatty";
import { Rock } from "../Classes/Rock";
import { Room } from "./Interfaces";

export const floor:Room[] = [
    {
        id:1,
        enemies:[],
        objects:[],
        doors:[new Door("left",2)]
    },
    {
        id:2,
        enemies:[],
        objects:[],
        doors:[new Door("right",1),new Door("up",3)]
    },
    {
        id:3,
        enemies:[new EnemyFatty(200,200)],
        objects:[new Rock(100,100),new Rock(100,162),new Rock(100,224),new Rock(100,224),new Rock(100,348),new Rock(100,410),new Rock(100,472)
        ,new Rock(165,100),new Rock(230,100),new Rock(295,100),new Rock(360,100),new Rock(555,100),new Rock(620,100),new Rock(685,100),new Rock(750,100),new Rock(815,100)
        ,new Rock(165,472),new Rock(230,472),new Rock(295,472),new Rock(360,472),new Rock(555,472),new Rock(620,472),new Rock(685,472),new Rock(750,472),new Rock(815,472),
        new Rock(815,100),new Rock(815,162),new Rock(815,224),new Rock(815,348),new Rock(815,410),new Rock(815,472)],
        doors:[new Door("down",2),new Door("left",1)]
    }
]