import { arrayLength } from './functions.js';

//Testeo la funcción de Length
describe('Given arrayLength funtion', () => {
    let arrayLengthTest;

    describe('When arguments is an array [2,5,10,25]', () => {
        beforeEach(() => {
            arrayLengthTest = [2, 5, 10, 25];
        });
        test('Then result should be 4', () => {
            const expected = 4;
            const result = arrayLength(arrayLengthTest);
            expect(result).toBe(expected);
        });
    });
    describe('When arguments is an array [2,5,10,25,0]', () => {
        beforeEach(() => {
            arrayLengthTest = [2, 5, 10, 25, 0];
        });
        test('Then result should be 5', () => {
            const expected = 5;
            const result = arrayLength(arrayLengthTest);
            expect(result).toBe(expected);
        });
    });
});
