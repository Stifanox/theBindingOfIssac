import {Bomb} from "../Classes/Pickups/Bomb";
import {BossDukeOfFly} from "../Classes/Enemies/BossDukeOfFly";
import {Coin} from "../Classes/Pickups/Coin";
import {BaseDoor} from "../Classes/Doors/BaseDoor";
import {DoorBoss} from "../Classes/Doors/DoorBoss";
import {DoorTreasure} from "../Classes/Doors/DoorTreasure";
import {EnemyFatty} from "../Classes/Enemies/EnemyFatty";
import {EnemyFly} from "../Classes/Enemies/EnemyFly";
import {EnemyFollower} from "../Classes/Enemies/EnemyFollower";
import {Heart} from "../Classes/Pickups/Heart";
import {ItemBloodOfTheMartyr} from "../Classes/Items/ItemBloodOfTheMartyr";
import {ItemBoom} from "../Classes/Items/ItemBoom";
import {ItemCricetHead} from "../Classes/Items/ItemCricetBody";
import {Key} from "../Classes/Pickups/Key";
import {PlatformItem} from "../Classes/Objects/PlatformItem";
import {Rock} from "../Classes/Objects/Rock";
import {Spikes} from "../Classes/Objects/Spikes";
import {Enemy} from "./Enemy";
import {Room} from "./Interfaces";

const randomItem = [new ItemBloodOfTheMartyr(465, 270), new ItemCricetHead(460, 270)]

export let enemies: Enemy[] = []

export const floor: Room[] = [
    {
        id: 1,
        enemies: [],
        objects: [new Spikes(110, 105), new Rock(155, 95), new Spikes(840, 105), new Rock(775, 95), new Spikes(110, 490), new Rock(155, 480), new Spikes(840, 490), new Rock(775, 480)],
        doors: [new BaseDoor("left", 2), new DoorTreasure('right', 4, true)],
        items: [],
        pickups: [new Heart(200, 200), new Coin(300, 300)]
    },
    {
        id: 2,
        enemies: [],
        objects: [new Rock(255, 155), new Rock(675, 155), new Rock(255, 400), new Rock(675, 400)],
        doors: [new BaseDoor("right", 1), new BaseDoor("up", 3), new DoorTreasure("left", 4, true)],
        items: [],
        pickups: [new Coin(450, 325)]
    },
    {
        id: 3,
        enemies: [new EnemyFatty(200, 200), new EnemyFollower(750, 200)],
        objects: [new Rock(100, 100), new Rock(100, 162), new Rock(100, 224), new Rock(100, 224), new Rock(100, 348), new Rock(100, 410), new Rock(100, 472)
            , new Rock(165, 100), new Rock(230, 100), new Rock(295, 100), new Rock(360, 100), new Rock(555, 100), new Rock(620, 100), new Rock(685, 100), new Rock(750, 100), new Rock(815, 100)
            , new Rock(165, 472), new Rock(230, 472), new Rock(295, 472), new Rock(360, 472), new Rock(555, 472), new Rock(620, 472), new Rock(685, 472), new Rock(750, 472), new Rock(815, 472),
            new Rock(815, 100), new Rock(815, 162), new Rock(815, 224), new Rock(815, 348), new Rock(815, 410), new Rock(815, 472)],
        doors: [new BaseDoor("down", 2), new BaseDoor("up", 5),],
        items: [],
        pickups: [new Bomb(200, 200), new Key(750, 200)]
    },
    {
        id: 4,
        enemies: [],
        objects: [new PlatformItem(460, 310), new Spikes(520, 310), new Spikes(410, 310), new Spikes(465, 260), new Spikes(465, 360)],
        doors: [new DoorTreasure("right", 2, false)],
        items: [randomItem[Math.floor(Math.random() * randomItem.length)]],
        pickups: []
    },
    {
        id: 5,
        enemies: [new EnemyFly(200, 200), new EnemyFly(450, 240)],
        objects: [new Rock(400, 472), new Rock(400, 412), new Rock(400, 352), new Rock(535, 472), new Rock(535, 412), new Rock(535, 352), new Rock(535, 292), new Rock(535, 232),
            new Rock(475, 232), new Rock(415, 232), new Rock(355, 232), new Rock(295, 232), new Rock(235, 232), new Rock(175, 232), new Rock(115, 232),
            new Rock(340, 352), new Rock(280, 352), new Rock(220, 352), new Rock(160, 352), new Rock(100, 352), new Spikes(200, 150), new Spikes(600, 150), new Spikes(650, 320),
            new Spikes(750, 400), new Spikes(230, 450), new Spikes(330, 420), new PlatformItem(830, 110)],
        doors: [new BaseDoor("down", 3), new DoorBoss("left", 6)],
        items: [new ItemBoom(840, 70)],
        pickups: [new Coin(780, 250)]
    },

    {
        id: 6,
        enemies: [new BossDukeOfFly(450, 300, enemies)],
        objects: [new Spikes(470, 300), new Rock(400, 290), new Rock(340, 290), new Rock(460, 350), new Rock(460, 410), new Rock(460, 230), new Rock(460, 170), new Rock(520, 290), new Rock(580, 290)],
        doors: [new DoorBoss("right", 5)],
        items: [],
        pickups: []
    },
]

