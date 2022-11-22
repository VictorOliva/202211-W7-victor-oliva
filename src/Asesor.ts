import { Character } from './personajes.js';

export class TheHand extends Character {
    constructor(name: string, family: string, age: number) {
        super(name, family, age);
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }
}
