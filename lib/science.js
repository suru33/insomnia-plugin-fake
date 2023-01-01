const {faker} = require('@faker-js/faker');

exports.science = {
    name: 'randomScience',
    displayName: 'Random Science',
    description: 'Get random scientific details',
    args: [{
        displayName: 'Category',
        type: 'enum',
        options: [
            {displayName: 'Element', value: 'element'},
            {displayName: 'Element Symbol', value: 'elementSymbol'},
            {displayName: 'Measuring Unit', value: 'unit'},
            {displayName: 'Measuring Unit Symbol', value: 'unitSymbol'},
        ]
    }],
    run: async (context, key) => {
        switch (key) {
            case 'element':
                return faker.science.chemicalElement().name;
            case 'elementSymbol':
                return faker.science.chemicalElement().symbol;
            case 'unit':
                return faker.science.unit().name;
            case 'unitSymbol':
                return faker.science.unit().symbol;
            default:
                return 'UNKNOWN-SCIENCE-CATEGORY';
        }
    }
}