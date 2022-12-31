const {faker} = require('@faker-js/faker');

exports.company = {
    name: 'randomCompany',
    displayName: 'Random Company',
    description: 'Get random company',
    args: [{
        displayName: 'Category',
        type: 'enum',
        options: [
            {displayName: 'name', value: 'name'},
            {displayName: 'suffix', value: 'suffix'},
            {displayName: 'catch phrase', value: 'catchPhrase'},
            {displayName: 'bs', value: 'bs'},
        ]
    }],
    run: async (context, key) => {
        switch (key) {
            case 'name': return faker.company.name();
            case 'suffix': return faker.company.companySuffix();
            case 'catchPhrase': return faker.company.catchPhrase();
            case 'bs': return faker.company.bs();
            default:
                return 'UNKNOWN-OPTION';
        }
    }
}