import { generateRandomName } from './name-generator';

describe('Generate a random name', () => {
    test('Should not be null', () => {
        expect(generateRandomName()).not.toBeNull();
    });
    test('Should not be an empty string', () => {
        expect(generateRandomName()).not.toBe('');
    });
});
