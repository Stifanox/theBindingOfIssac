import {EntityGroup} from "../../Utils/Interfaces/EntityGroup";

export class EnemyGroup implements EntityGroup{
    provideEntityNames(): string[] {
        return ['Fatty', 'Duke Of Files', "Fly", 'Follower'];
    }

    provideGroupName(): string {
        return "Enemies";
    }
}