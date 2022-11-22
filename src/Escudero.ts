import { Character } from './personajes.js';

export class Squire extends Character {
    servingTo: string;
    assLicker: number;

    constructor(
        name: string,
        family: string,
        age: number,
        servingTo: string,
        assLicker: number
    ) {
        super(name, family, age);
        this.servingTo = servingTo;
        this.assLicker = assLicker;
        this.message = 'Soy un loser';
    }
}
