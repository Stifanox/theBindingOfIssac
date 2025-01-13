import {EntityGroup} from "../../Utils/Interfaces/EntityGroup";

export class PickupGroup implements EntityGroup {
    provideEntityNames(): string[] {
        return ['Bomb', 'Coin', 'Heart']
    }
    provideGroupName(): string {
        return 'Pickups'
    }

}