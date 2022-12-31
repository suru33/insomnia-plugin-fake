const {faker} = require('@faker-js/faker');
const {ibanCountries, getCountryName} = require("./data");

exports.finance = {
    name: 'randomFinance',
    displayName: 'Random Finance',
    description: 'Get random finance',
    args: [{
        displayName: 'Finance Category',
        type: 'enum',
        options: [
            {displayName: 'Account Name', value: 'accountName'},
            {displayName: 'BIC', value: 'bic'},
            {displayName: 'BIC with Branch', value: 'bicLong'},
            {displayName: 'Bitcoin Address', value: 'bitcoinAddress'},
            {displayName: 'Litecoin Address', value: 'litecoinAddress'},
            {displayName: 'Credit Card CVV', value: 'creditCardCVV'},
            {displayName: 'Credit Card Issuer', value: 'creditCardIssuer'},
            {displayName: 'Currency Code', value: 'currencyCode'},
            {displayName: 'Currency Name', value: 'currencyName'},
            {displayName: 'Currency Symbol', value: 'currencySymbol'},
            {displayName: 'Ethereum Address', value: 'ethereumAddress'},
            {displayName: 'Credit Card PIN 4 Digits', value: 'pin4'},
            {displayName: 'Credit Card PIN 6 Digits', value: 'pin6'},
            {displayName: 'Routing Number', value: 'routingNumber'},
            {displayName: 'Transaction Description', value: 'transactionDescription'},
            {displayName: 'Transaction Type', value: 'transactionType'},
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
                return 'UNKNOWN-FINANCE-CATEGORY';
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
            options: ibanCountries.map(code => ({displayName: getCountryName(code), value: code})),
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
    name: 'randomBankAccountNumber',
    displayName: 'Random Bank Account Number',
    description: 'Get random bank account number',
    args: [
        {
            displayName: 'Account Number Length (5-15)',
            description: 'Should be between 5 to 15, or defaults to 8',
            type: 'number',
            defaultValue: 8
        }
    ],
    run: async (context, length) => {
        return faker.finance.account(length < 5 || length > 15 ? 8 : length);
    }
}