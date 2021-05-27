import { randomAnimal } from './animals'
import { randomAdjective } from './adjectives'

export function generateRandomName(): string {
    return randomAdjective() + ' ' + randomAnimal();
}


