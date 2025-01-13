import {EntityFactory} from "../../Utils/Interfaces/EntityFactory";
import {EntityInterface} from "../../Utils/Interfaces";
import {EnemyFatty} from "../../Classes/Enemies/EnemyFatty";
import {BossDukeOfFly} from "../../Classes/Enemies/BossDukeOfFly";
import {EnemyFly} from "../../Classes/Enemies/EnemyFly";
import {EnemyFollower} from "../../Classes/Enemies/EnemyFollower";

export class EnemyFactory implements EntityFactory {
    createEntity(entityName: string): EntityInterface {
        switch (entityName) {
            case 'Fatty':
                return new EnemyFatty(0,0)
            case 'Duke Of Files':
                new BossDukeOfFly(0,0,[])
            case "Fly":
                return new EnemyFly(0,0)
            case 'Follower':
                return new EnemyFollower(0,0)
        }
    }


}