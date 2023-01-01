const {faker} = require('@faker-js/faker');

exports.datatypeNumber = {
    name: 'randomDatatypeNumber',
    displayName: 'Random Number',
    description: 'Get random number',
    args: [
        {
            displayName: 'Minimum',
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Maximum',
            type: 'number',
            defaultValue: 1000
        },
        {
            displayName: 'Float',
            type: 'boolean',
            defaultValue: false
        },
        {
            displayName: 'Precision (only works for float) min 1 max 6, default to 4',
            type: 'number',
            defaultValue: 4
        },
    ],
    run: async (context, min, max, float, precision) => {
        if (float) {
            precision = precision < 1 || precision > 6 ? 4 : precision;
            return faker.datatype.number({min: min, max: max, precision: 1 / 10 ^ precision});
        } else {
            return faker.datatype.number({min: min, max: max})
        }
    }
}

exports.datatypeBoolean = {
    name: 'randomDatatypeBoolean',
    displayName: 'Random Boolean',
    description: 'Get random boolean',
    args: [],
    run: async (context) => {
        return faker.datatype.boolean();
    }
}

exports.datatypeHexadecimal = {
    name: 'randomDatatypeHexadecimal',
    displayName: 'Random Hexadecimal',
    description: 'Get random hexadecimal',
    args: [
        {
            displayName: 'Case',
            type: 'enum',
            options: [
                {displayName: 'Lower', value: 'lower'},
                {displayName: 'Upper', value: 'upper'},
            ]
        },
        {
            displayName: 'Length',
            description: 'Length of the value minimum 1 maximum 64, defaults to 4',
            type: 'number',
            defaultValue: 4
        }
    ],
    run: async (context, hexCase, length) => {
        length = length < 1 || length > 64 ? 4 : length;
        return faker.datatype.hexadecimal({case: hexCase, length: length});
    }
}

exports.datatypeString = {
    name: 'randomDatatypeHexadecimal',
    displayName: 'Random Hexadecimal',
    description: 'Get random hexadecimal',
    args: [
        {
            displayName: 'Case',
            type: 'enum',
            options: [
                {displayName: 'Lower', value: 'lower'},
                {displayName: 'Upper', value: 'upper'},
                {displayName: 'Mixed', value: 'mixed'},
            ],
            defaultValue: 'mixed'
        },
        {
            displayName: 'Length',
            description: 'Length of the value minimum 1 maximum 10000, defaults to 10',
            type: 'number',
            defaultValue: 10
        }
    ],
    run: async (context, stringCase, length) => {
        length = length < 1 || length > 10000 ? 10 : length;
        const str = faker.datatype.string(length);
        switch (stringCase) {
            case 'lower':
                return str.toLowerCase();
            case 'upper':
                return str.toUpperCase();
            default:
                return str;
        }
    }
}

exports.datatypeUUID = {
    name: 'randomDatatypeUUID',
    displayName: 'Random UUID',
    description: 'Get random UUID',
    args: [],
    run: async (context) => {
        return faker.datatype.uuid();
    }
}
