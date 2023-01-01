const {address, addressTimeZone, addressZipCode} = require('./lib/address');
const {animal} = require('./lib/animal');
const {color} = require('./lib/colors');
const {commerce} = require('./lib/commerce');
const {company} = require('./lib/company');
const {computer} = require("./lib/computer");
const {datatypeNumber, datatypeBoolean, datatypeHexadecimal, datatypeString, datatypeUUID} = require("./lib/datatype");
const {employment} = require("./lib/employment");
const {finance, financeAccountNumber, financeIBAN} = require('./lib/finance');
const {imageURLs} = require("./lib/imageurls");
const {internet} = require("./lib/internet");
const {lorem} = require("./lib/lorem");
const {music} = require("./lib/music");
const {name} = require("./lib/name");
const {science} = require("./lib/science");
const {vehicle} = require("./lib/vehicle");
const {word} = require("./lib/word");

module.exports.templateTags = [
    address,
    addressTimeZone,
    addressZipCode,
    animal,
    color,
    commerce,
    company,
    computer,
    datatypeNumber,
    datatypeBoolean,
    datatypeHexadecimal,
    datatypeString,
    datatypeUUID,
    employment,
    finance,
    financeAccountNumber,
    financeIBAN,
    imageURLs,
    internet,
    lorem,
    music,
    name,
    science,
    vehicle,
    word,
];