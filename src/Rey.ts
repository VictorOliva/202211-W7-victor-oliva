import { Character } from './personajes.js';

export class KingOfTheIronThrone extends Character {
    regnalYears: number;

    constructor(
        name: string,
        family: string,
        age: number,
        regnalYears: number
    ) {
        super(name, family, age);
        this.regnalYears = regnalYears;
        this.message = 'Vais a morir todos';
    }
}
