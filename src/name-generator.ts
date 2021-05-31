import { randomAnimal, randomMythicalOrAnimal } from './animals'
import { randomAdjective } from './adjectives'

export function generateRandomName(allowMythical:boolean=false): string {
    return randomAdjective() + ' ' + (allowMythical ? randomMythicalOrAnimal() : randomAnimal());
}
