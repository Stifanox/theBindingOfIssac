import {Animation, EntityInterface} from "../Utils/Interfaces";
import {GroupSelectorDom} from "./GroupSelectorDom";

export class Editor implements Animation {
    private ctx: CanvasRenderingContext2D;
    private DOMSelector: GroupSelectorDom;
    selectedEntity: EntityInterface|null

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx
        this.DOMSelector = new GroupSelectorDom()
        this.DOMSelector.init()
        this.selectedEntity = null
    }

    draw(ctx?: CanvasRenderingContext2D): void {

    }

    update(delta: number): void {
        throw new Error("Method not implemented.");
    }

    private getCurrentlySelectedEntity(): void {

    }
}