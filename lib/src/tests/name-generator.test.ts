import { generateRandomName, RandomWordOptions } from '../name-generator';
import { animals, adjectives, mythicalAnimals, colors } from '../wordsets';

describe('Generate a default random name', () => {
    test('Should not be null', () => {
        expect(generateRandomName()).not.toBeNull();
    });
    test('Should not be an empty string', () => {
        expect(generateRandomName()).not.toBe('');
    });
});

describe('Generate a name from included sets', () => {
    test('Generated word should be from the adjectives set', () => {
        const word1Options: RandomWordOptions = { includeAdjectives: true };
        const name = generateRandomName([word1Options]);
        expect(adjectives.includes(name)).toBeTruthy();
    });
    test('Generated word should be from the animals or mythical animals set', () => {
        const word1Options: RandomWordOptions = { includeAnimals: true ,includeMythicalAnimals: true };
        const name = generateRandomName([word1Options]);
        expect(animals.includes(name) || mythicalAnimals.includes(name)).toBeTruthy();
    });

    test('Check words in result', () => {

        const word1Options: RandomWordOptions = { includeColors: true };
        const word2Options: RandomWordOptions = { includeAdjectives: true };

        const name = generateRandomName([word1Options, word2Options]);
        const words = name.split(' ');
    
        expect(colors.includes(words[0])).toBeTruthy();
        expect(adjectives.includes(words[1])).toBeTruthy();
    });

    test('Check last word in combined arrays', () => {

        const word1Options: RandomWordOptions = { includeColors: true };
        const word2Options: RandomWordOptions = { includeAnimals: true, includeMythicalAnimals: true };

        const name = generateRandomName([word2Options, word1Options]);
        const words = name.split(' ');
    
        expect(colors.includes(words[words.length-1])).toBeTruthy();
    });
});


describe('Generate a name from custom sets', () => {
    
    const customSetA: Array<string> = ['A1', 'A2', 'A3', 'A4', 'A5'];
    const customSetB: Array<string> = ['B1', 'B2', 'B3', 'B4', 'B5'];

    test('Generated word should be two characters long', () => {
        const word1Options: RandomWordOptions = { customWordSet: customSetA };
        const name = generateRandomName([word1Options]);
        expect(name.length == 2);
    });

    test('Check included words from custom arrays', () => {
        const word1Options: RandomWordOptions = { customWordSet: customSetA };
        const word2Options: RandomWordOptions = { customWordSet: customSetB };

        const name = generateRandomName([word1Options, word2Options]);
        const words = name.split(' ');

        expect(customSetA.includes(words[0])).toBeTruthy();
        expect(customSetB.includes(words[1])).toBeTruthy();
    });

    test('Check included words in combined arrays', () => {

        const word1Options: RandomWordOptions = { customWordSet: customSetA };
        const word2Options: RandomWordOptions = { includeAnimals: true, includeMythicalAnimals: true };
        const word3Options: RandomWordOptions = { customWordSet: customSetB };

        const name = generateRandomName([word1Options, word2Options, word3Options]);
        const words = name.split(' ');
        const midPart = name.substring(3, name.length-3);
    
        expect(customSetA.includes(words[0])).toBeTruthy();
        expect(customSetB.includes(words[words.length-1])).toBeTruthy();
        expect(animals.includes(midPart) || mythicalAnimals.includes(midPart)).toBeTruthy();
    });
});
