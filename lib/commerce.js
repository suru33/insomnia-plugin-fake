const {faker} = require('@faker-js/faker');

exports.commerce = {
    name: 'randomCommerce',
    displayName: 'Random Commerce',
    description: 'Get random commerce item',
    args: [{
        displayName: 'Category',
        type: 'enum',
        options: [
            {displayName: 'department', value: 'department'},
            {displayName: 'product short name', value: 'productShortName'},
            {displayName: 'product description', value: 'productDescription'},
            {displayName: 'product material', value: 'productMaterial'},
            {displayName: 'product name', value: 'productName'},
        ]
    }],
    run: async (context, key) => {
        switch (key) {
            case 'department':
                return faker.commerce.department();
            case 'productShortName':
                return faker.commerce.product();
            case 'productDescription':
                return faker.commerce.productDescription();
            case 'productMaterial':
                return faker.commerce.productMaterial();
            case 'productName':
                return faker.commerce.productName();
            default:
                return 'UNKNOWN-OPTION';
        }
    }
}