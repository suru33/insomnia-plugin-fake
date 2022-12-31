const {address, addressTimeZone, addressZipCode} = require('./lib/address');
const {animal} = require('./lib/animal');
const {color} = require('./lib/colors');
const {commerce} = require('./lib/commerce');
const {company} = require('./lib/company');
const {finance, iban, accountNumber} = require('./lib/finance');

module.exports.templateTags = [
    address,
    addressTimeZone,
    addressZipCode,
    animal,
    color,
    commerce,
    company,
    finance,
    iban,
    accountNumber
];