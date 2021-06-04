import { adjectives, animals, mythicalAnimals, colors } from './wordsets';

export function generateRandomName( options?: Array<RandomWordOptions> ): string {

    if(options == undefined) {
        options = getDefaultOptions();
    }

    const words = new Array<string>();

    options.forEach(option => {
        const wordset = buildWordSet(option);
        words.push(getRandomString(wordset));
    });

    return words.join(' ');
}

function getDefaultOptions(): Array<RandomWordOptions> {
    return [ 
        { includeAdjectives: true, includeColors: true },
        { includeAnimals: true, includeMythicalAnimals: true }
    ];
}

function buildWordSet(option: RandomWordOptions): string[] {
    const wordset = new Array<string>();

    if(option.includeAdjectives) {
        wordset.push(...adjectives);
    }
    if(option.includeColors) {
        wordset.push(...colors);
    }
    if(option.includeAnimals) {
        wordset.push(...animals);
    }
    if(option.includeMythicalAnimals) {
        wordset.push(...mythicalAnimals);
    }
    if(option.customWordSet != undefined) {
        wordset.push(...option.customWordSet);
    }
    
    return wordset;
}

function getRandomString(wordset: Array<string>): string {
    return wordset[Math.floor(Math.random() * wordset.length)];
}

export interface RandomWordOptions
{
    includeAnimals?: boolean;
    includeMythicalAnimals?: boolean;
    includeColors?: boolean;
    includeAdjectives?: boolean;
    customWordSet?: string[];
}
