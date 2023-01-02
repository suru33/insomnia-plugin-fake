const { faker } = require("@faker-js/faker");
const { allCountryCodes, getCountryName, getPhoneFormat } = require("./data");

exports.phoneNumber = {
  name: "fakePhoneNumber",
  displayName: "Fake Phone Number",
  description: "Get fake phone number",
  args: [{
    displayName: "Country",
    type: "enum",
    options: allCountryCodes.map(code => ({ displayName: getCountryName(code), value: code }))
  }],
  run: async (context, key) => faker.phone.number(getPhoneFormat(key))
};

exports.phoneIMEI = {
  name: "fakePhoneIMEI",
  displayName: "Fake Phone IMEI",
  description: "Get fake phone IMEI",
  args: [],
  // eslint-disable-next-line no-unused-vars
  run: async (context) => faker.phone.imei()
};
