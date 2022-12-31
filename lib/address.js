const {faker} = require('@faker-js/faker');
const {
    all_country_codes,
    all_time_zones,
    get_country_name,
    get_zip_code_format,
} = require("./data");

exports.address = {
    name: 'randomAddress',
    displayName: 'Random Address',
    description: 'Get random address',
    args: [{
        displayName: 'Category',
        type: 'enum',
        options: [
            {displayName: 'building number', value: 'buildingNumber'},
            {displayName: 'cardinal direction', value: 'cardinalDirection'},
            {displayName: 'city name', value: 'cityName'},
            {displayName: 'country name', value: 'countryName'},
            {displayName: 'country code iso-2', value: 'countryCode2'},
            {displayName: 'country code iso-3', value: 'countryCode3'},
            {displayName: 'direction', value: 'direction'},
            {displayName: 'latitude', value: 'latitude'},
            {displayName: 'longitude', value: 'longitude'},
            {displayName: 'address line 1', value: 'addressLine1'},
            {displayName: 'address line 2', value: 'addressLine2'},
            {displayName: 'full address', value: 'addressFull'},
            {displayName: 'state', value: 'state'},
            {displayName: 'street name', value: 'streetName'},
        ]
    }],
    run: async (context, key) => {
        switch (key) {
            case 'buildingNumber':
                return faker.address.buildingNumber();
            case 'cardinalDirection':
                return faker.address.cardinalDirection();
            case 'cityName':
                return faker.address.cityName();
            case 'countryName':
                return faker.address.country();
            case 'countryCode2':
                return faker.address.countryCode('alpha-2');
            case 'countryCode3':
                return faker.address.countryCode('alpha-3');
            case 'direction':
                return faker.address.direction();
            case 'latitude':
                return faker.address.latitude(90, -90, 6);
            case 'longitude':
                return faker.address.longitude(180, -180, 6);
            case 'addressFull':
                return faker.address.streetAddress(true);
            case 'addressLine1':
                return faker.address.streetAddress(false);
            case 'addressLine2':
                return faker.address.secondaryAddress();
            case 'state':
                return faker.address.state();
            case 'streetName':
                return faker.address.streetName();
            default:
                return 'UNKNOWN-ADDRESS-CATEGORY';
        }
    }
}

// TODO: fix
exports.addressZipCode = {
    name: 'randomAddressZipCode',
    displayName: 'Random Address Zip Code',
    description: 'Get random address zip code',
    args: [
        {
            displayName: 'Country',
            type: 'enum',
            options: all_country_codes.map(code => ({
                displayName: get_country_name(code),
                value: get_zip_code_format(code)
            })),
            defaultValue: '#####'
        }
    ],
    run: async (context, format) => {
        return faker.address.zipCode(format);
    }
}

exports.addressTimeZone = {
    name: 'randomAddressTimeZone',
    displayName: 'Random Address Time Zone',
    description: 'Get random address time zone',
    args: [
        {
            displayName: 'Continent',
            type: 'enum',
            options: Object.keys(all_time_zones).map(name => ({displayName: name, value: name})),
            defaultValue: 'Europe'
        }
    ],
    run: async (context, continent) => {
        const time_zones = all_time_zones[continent];
        return time_zones ? faker.helpers.arrayElement(time_zones) : 'UNKNOWN-CONTINENT';
    }
}
