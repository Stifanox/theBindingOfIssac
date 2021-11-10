import { Animation } from "./Interfaces";

export class Game implements Animation{
    /**
     * Draw all possible entities
     */
    draw(): void {
        throw new Error("Method not implemented.");
    }
    /**
     * Updates all possible entities
     * @param delta {number} time between two rendered frames
     */
    update(delta:number): void {
        throw new Error("Method not implemented.");
    }
}