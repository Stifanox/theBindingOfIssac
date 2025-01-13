import {EntityGroup} from "../../Utils/Interfaces/EntityGroup";

export class ObjectGroup implements EntityGroup{
    provideEntityNames(): string[] {
        return ['Rock', "Spikes"]
    }
    provideGroupName(): string {
        return 'Objects'
    }

}