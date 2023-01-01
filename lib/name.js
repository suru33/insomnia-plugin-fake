const {faker} = require('@faker-js/faker');

exports.name = {
    name: 'randomName',
    displayName: 'Random Name',
    description: 'Get random name',
    args: [
        {
            displayName: 'Category',
            type: 'enum',
            options: [
                {displayName: 'firstName', value: 'firstName'},
                {displayName: 'middleName', value: 'middleName'},
                {displayName: 'lastName', value: 'lastName'},
                {displayName: 'fullName', value: 'fullName'},
                {displayName: 'prefix', value: 'prefix'},
                {displayName: 'suffix', value: 'suffix'},
            ],
            defaultValue: 'fullName'
        },
        {
            displayName: 'Sex',
            type: 'enum',
            options: [
                {displayName: 'Male', value: 'male'},
                {displayName: 'Female', value: 'female'},
            ],
            defaultValue: 'male'
        }
    ],
    run: async (context, category, sex) => {
        switch (category) {
            case 'firstName':
                return faker.name.firstName(sex);
            case 'middleName':
                return faker.name.middleName(sex);
            case 'lastName':
                return faker.name.lastName(sex);
            case 'fullName':
                return faker.name.fullName({sex: sex});
            case 'prefix':
                return faker.name.prefix(sex);
            case 'suffix':
                return faker.name.suffix();
            default:
                return 'UNKNOWN-NAME-OPTION';
        }
    }
}






