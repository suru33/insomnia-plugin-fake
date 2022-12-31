const {faker} = require('@faker-js/faker');

exports.commerce = {
    name: 'randomCommerce',
    displayName: 'Random Commerce',
    description: 'Get random commerce item',
    args: [{
        displayName: 'Category',
        type: 'enum',
        options: [
            {displayName: 'Department', value: 'department'},
            {displayName: 'Product Short Name', value: 'productShortName'},
            {displayName: 'Product Description', value: 'productDescription'},
            {displayName: 'Product Material', value: 'productMaterial'},
            {displayName: 'Product Name', value: 'productName'},
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
                return 'UNKNOWN-COMMERCE-CATEGORY';
        }
    }
}