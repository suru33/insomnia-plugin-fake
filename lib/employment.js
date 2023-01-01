const {faker} = require('@faker-js/faker');

exports.employment = {
    name: 'randomEmployment',
    displayName: 'Random Employment',
    description: 'Get random employment details',
    args: [{
        displayName: 'Category',
        type: 'enum',
        options: [
            {displayName: 'Job Area', value: 'jobArea'},
            {displayName: 'Job Descriptor', value: 'jobDescriptor'},
            {displayName: 'Job Title', value: 'jobTitle'},
            {displayName: 'Job Type', value: 'jobType'},
        ]
    }],
    run: async (context, key) => {
        switch (key) {
            case 'jobArea':
                return faker.name.jobArea();
            case 'jobDescriptor':
                return faker.name.jobDescriptor();
            case 'jobTitle':
                return faker.name.jobTitle();
            case 'jobType':
                return faker.name.jobType();
            default:
                return 'UNKNOWN-EMPLOYMENT-CATEGORY';
        }
    }
}
