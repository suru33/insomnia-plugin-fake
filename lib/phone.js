const { faker } = require("@faker-js/faker");
const { allCountryCodes, getCountryName, getPhoneFormat } = require("./data");

exports.phoneNumber = {
  name: "randomPhoneNumber",
  displayName: "Random Phone Number",
  description: "Get random phone number",
  args: [{
    displayName: "Country",
    type: "enum",
    options: allCountryCodes.map(code => ({ displayName: getCountryName(code), value: code }))
  }],
  run: async (context, key) => faker.phone.number(getPhoneFormat(key))
};

exports.phoneIMEI = {
  name: "randomPhoneIMEI",
  displayName: "Random Phone IMEI",
  description: "Get random phone IMEI",
  args: [],
  // eslint-disable-next-line no-unused-vars
  run: async (context) => faker.phone.imei()
};
