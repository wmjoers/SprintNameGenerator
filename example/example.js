var nameGenerator = require('sprintnamegenerator');

// Use default sets
console.log(nameGenerator.generateRandomName());

// Use included sets
var word1options = {
    includeAdjectives: true
};

var word2options = {
    includeColors: true
};

var word3options = {
    includeAnimals: true,
    includeMythicalAnimals: true
};

console.log(nameGenerator.generateRandomName([word1options, word2options, word3options]));

// Use included and custom setes
var customOptions = {
    customWordSet: ['Rick', 'Morty', 'Jerry', 'Summer', 'Beth']
};

console.log(nameGenerator.generateRandomName([word1options, customOptions]));
