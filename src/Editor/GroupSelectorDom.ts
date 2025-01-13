import {EnemyGroup} from "./EnitityGroup/EnemyGroup";
import {ObjectGroup} from "./EnitityGroup/ObjectGroup";
import {PickupGroup} from "./EnitityGroup/PickupGroup";
import {EntityGroup} from "../Utils/Interfaces/EntityGroup";

export class GroupSelectorDom {
    private buttonsDiv: HTMLDivElement;
    private groupSelectorSelect: HTMLSelectElement;
    groups: EntityGroup[];
    private selectedEntity: string;

    constructor() {
        this.groups = [new EnemyGroup(), new ObjectGroup(), new PickupGroup()]
        this.buttonsDiv = document.querySelector('.group-buttons');
        this.groupSelectorSelect = document.querySelector('.entity-selector');
        this.groupSelectorSelect.addEventListener('change', (e) => {
            this.selectedEntity = this.groupSelectorSelect.value;
        })

        this.selectedEntity = ''
    }

    init() {
        this.createButtons()
    }

    private createButtons(): void {
        this.groups.forEach(entityGroup => {
            const button = document.createElement("button");
            this.buttonsDiv.append(button);
            button.innerText = entityGroup.provideGroupName()
            button.addEventListener("click", () => {
                this.createOptionsInSelector(entityGroup)
            })
        })
    }

    private createOptionsInSelector(group: EntityGroup) {
        this.groupSelectorSelect.innerHTML = ''

        group.provideEntityNames().forEach(entityName => {
            const option = document.createElement("option");
            option.innerText = entityName
            option.value = entityName
            this.groupSelectorSelect.append(option)
        })
    }
}