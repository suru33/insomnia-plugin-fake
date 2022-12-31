const {faker} = require('@faker-js/faker');
const {iban_countries, get_country_name} = require("./data");

exports.finance = {
    name: 'randomFinance',
    displayName: 'Random Finance',
    description: 'Get random finance',
    args: [{
        displayName: 'Finance Category',
        type: 'enum',
        options: [
            {displayName: 'account name', value: 'accountName'},
            {displayName: 'bic', value: 'bic'},
            {displayName: 'bic with branch', value: 'bicLong'},
            {displayName: 'bitcoin address', value: 'bitcoinAddress'},
            {displayName: 'litecoin address', value: 'litecoinAddress'},
            {displayName: 'credit card cvv', value: 'creditCardCVV'},
            {displayName: 'credit card issuer', value: 'creditCardIssuer'},
            {displayName: 'currency code', value: 'currencyCode'},
            {displayName: 'currency name', value: 'currencyName'},
            {displayName: 'currency symbol', value: 'currencySymbol'},
            {displayName: 'ethereum address', value: 'ethereumAddress'},
            {displayName: 'credit card pin 4', value: 'pin4'},
            {displayName: 'credit card pin 6', value: 'pin6'},
            {displayName: 'routing number', value: 'routingNumber'},
            {displayName: 'transaction description', value: 'transactionDescription'},
            {displayName: 'transaction type', value: 'transactionType'},
        ]
    }],
    run: async (context, key) => {
        switch (key) {
            case 'accountName':
                return faker.finance.accountName();
            case 'bic':
                return faker.finance.bic({includeBranchCode: false});
            case 'bicLong':
                return faker.finance.bic({includeBranchCode: true});
            case 'bitcoinAddress':
                return faker.finance.bitcoinAddress();
            case 'creditCardCVV':
                return faker.finance.creditCardCVV();
            case 'creditCardIssuer':
                return faker.finance.creditCardIssuer();
            case 'currencyCode':
                return faker.finance.currencyCode();
            case 'currencyName':
                return faker.finance.currencyName();
            case 'currencySymbol':
                return faker.finance.currencySymbol();
            case 'ethereumAddress':
                return faker.finance.ethereumAddress();
            case 'litecoinAddress':
                return faker.finance.litecoinAddress();
            case 'pin4':
                return faker.finance.pin();
            case 'pin6':
                return faker.finance.pin(6);
            case 'routingNumber':
                return faker.finance.routingNumber();
            case 'transactionDescription':
                return faker.finance.transactionDescription();
            case 'transactionType':
                return faker.finance.transactionType();
            default:
                return 'UNKNOWN-OPTION';
        }
    }
}

exports.iban = {
    name: 'randomFinanceIBAN',
    displayName: 'Random IBAN',
    description: 'Get random IBAN',
    args: [
        {
            displayName: 'Country',
            type: 'enum',
            options: iban_countries.map(code => ({displayName: get_country_name(code), value: code})),
            defaultValue: 'FI'
        },
        {
            displayName: 'Formatted',
            type: 'boolean',
            defaultValue: true
        }
    ],
    run: async (context, country, formatted) => {
        return faker.finance.iban(formatted, country)
    }
}

exports.accountNumber = {
    name: 'randomFinanceAccountNumber',
    displayName: 'Random Bank Account Number',
    description: 'Get random account number',
    args: [
        {
            displayName: 'Account Number Length (5-15)',
            description: 'Should be between 5 to 15, or defaults to length 8',
            type: 'number',
            defaultValue: 8
        }
    ],
    run: async (context, length) => {
        return faker.finance.account(length < 5 || length > 15 ? 8 : length);
    }
}