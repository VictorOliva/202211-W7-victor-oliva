import { TheHand } from './Asesor.js';
import { Fighter } from './Luchador.js';
import { KingOfTheIronThrone } from './Rey.js';
import { Squire } from './Escudero.js';

export const characters = [
    new KingOfTheIronThrone('Joffrey', 'Baratheon', 14, 2),
    new Fighter('Jaime ', 'Lannister', 43, 'One Hand', 5),
    new Fighter('Daenerys', 'Targaryen', 24, 'Dragon', 9),
    new TheHand('Tyrion', 'Lannister', 39),
    new Squire('Bronn', '', 36, 'Jaime', 10),
];
