const { fakeAddress, randomAddress, addressTimeZone, addressZipCode } = require("./lib/address");
const { animal } = require("./lib/animal");
const { color } = require("./lib/colors");
const { commerce } = require("./lib/commerce");
const { company } = require("./lib/company");
const { computer } = require("./lib/computer");
const { database } = require("./lib/database");
const { datatypeNumber, datatypeBoolean, datatypeHexadecimal, datatypeString, datatypeUUID } = require("./lib/datatype");
const { dateTimeNow, dateTimeWithInDays, dateTimeWithInYears } = require("./lib/datetime");
const { employment } = require("./lib/employment");
const { finance, financeAccountNumber, financeIBAN } = require("./lib/finance");
const { imageURLs } = require("./lib/imageurls");
const { fakeInternet, randomInternet } = require("./lib/internet");
const { lorem } = require("./lib/lorem");
const { music } = require("./lib/music");
const { name } = require("./lib/name");
const { phoneIMEI, phoneNumber } = require("./lib/phone");
const { science } = require("./lib/science");
const { vehicle } = require("./lib/vehicle");
const { word } = require("./lib/word");

const allTemplateTags = [
  fakeAddress,
  randomAddress,
  addressTimeZone,
  addressZipCode,
  animal,
  color,
  commerce,
  company,
  computer,
  database,
  datatypeNumber,
  datatypeBoolean,
  datatypeHexadecimal,
  datatypeString,
  datatypeUUID,
  dateTimeNow,
  dateTimeWithInDays,
  dateTimeWithInYears,
  employment,
  finance,
  financeAccountNumber,
  financeIBAN,
  imageURLs,
  fakeInternet,
  randomInternet,
  lorem,
  music,
  name,
  phoneIMEI,
  phoneNumber,
  science,
  vehicle,
  word
];

module.exports.templateTags = allTemplateTags;

// To generate README
// allTemplateTags.forEach(t => {
//   console.log(`### ${t.displayName}`);
//   t.args.filter(arg => arg.type === "enum")
//     .forEach(arg => arg.options.forEach(option =>
//       console.log(`- ${option.displayName}`))
//     );
// });
