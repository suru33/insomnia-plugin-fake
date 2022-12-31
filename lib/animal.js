const {faker} = require('@faker-js/faker');

exports.animal = {
    name: 'randomAnimal',
    displayName: 'Random Animal',
    description: 'Get random animal name',
    args: [{
        displayName: 'Category',
        type: 'enum',
        options: [
            {displayName: 'bear', value: 'bear'},
            {displayName: 'bird', value: 'bird'},
            {displayName: 'cat', value: 'cat'},
            {displayName: 'cetacean', value: 'cetacean'},
            {displayName: 'cow', value: 'cow'},
            {displayName: 'crocodilia', value: 'crocodilia'},
            {displayName: 'dog', value: 'dog'},
            {displayName: 'fish', value: 'fish'},
            {displayName: 'horse', value: 'horse'},
            {displayName: 'insect', value: 'insect'},
            {displayName: 'lion', value: 'lion'},
            {displayName: 'rabbit', value: 'rabbit'},
            {displayName: 'rodent', value: 'rodent'},
            {displayName: 'snake', value: 'snake'},
            {displayName: 'type', value: 'type'},
        ]
    }],
    run: async (context, key) => {
        console.log("context", context)
        switch (key) {
            case 'bear':
                return faker.animal.bear();
            case 'bird':
                return faker.animal.bird();
            case 'cat':
                return faker.animal.cat();
            case 'cetacean':
                return faker.animal.cetacean();
            case 'cow':
                return faker.animal.cow();
            case 'crocodilia':
                return faker.animal.crocodilia();
            case 'dog':
                return faker.animal.dog();
            case 'fish':
                return faker.animal.fish();
            case 'horse':
                return faker.animal.horse();
            case 'insect':
                return faker.animal.insect();
            case 'lion':
                return faker.animal.lion();
            case 'rabbit':
                return faker.animal.rabbit();
            case 'rodent':
                return faker.animal.rodent();
            case 'snake':
                return faker.animal.snake();
            case 'type':
                return faker.animal.type();
            default:
                return 'UNKNOWN-OPTION';
        }
    }
}