const { faker } = require("@faker-js/faker");
const {
  allCountryCodes,
  allTimeZones,
  getCountryName,
  getZipCodeFormat
} = require("./data");

exports.fakeAddress = {
  name: "fakeAddress",
  displayName: "Fake Address",
  description: "Get fake address",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Building Number", value: "buildingNumber" },
      { displayName: "Latitude", value: "latitude" },
      { displayName: "Longitude", value: "longitude" },
      { displayName: "Address Line 1", value: "addressLine1" },
      { displayName: "Address Line 2", value: "addressLine2" },
      { displayName: "Full Address", value: "addressFull" },
      { displayName: "Street Name", value: "streetName" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "buildingNumber": return faker.address.buildingNumber();
      case "latitude": return faker.address.latitude(90, -90, 6);
      case "longitude": return faker.address.longitude(180, -180, 6);
      case "addressLine1": return faker.address.streetAddress(false);
      case "addressLine2": return faker.address.secondaryAddress();
      case "addressFull": return faker.address.streetAddress(true);
      case "streetName": return faker.address.streetName();
      default: return "UNKNOWN-FAKE-ADDRESS-CATEGORY";
    }
  }
};

exports.randomAddress = {
  name: "randomAddress",
  displayName: "Random Address",
  description: "Get random address",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Cardinal Direction", value: "cardinalDirection" },
      { displayName: "City Name", value: "cityName" },
      { displayName: "Country Name", value: "countryName" },
      { displayName: "Country Code ISO-2", value: "countryCode2" },
      { displayName: "Country Code ISO-3", value: "countryCode3" },
      { displayName: "Direction", value: "direction" },
      { displayName: "USA State", value: "state" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "cardinalDirection": return faker.address.cardinalDirection();
      case "cityName": return faker.address.cityName();
      case "countryName": return faker.address.country();
      case "countryCode2": return faker.address.countryCode("alpha-2");
      case "countryCode3": return faker.address.countryCode("alpha-3");
      case "direction": return faker.address.direction();
      case "state": return faker.address.state();
      default: return "UNKNOWN-RANDOM-ADDRESS-CATEGORY";
    }
  }
};

exports.addressZipCode = {
  name: "fakeAddressZipCode",
  displayName: "Fake Address Zip Code",
  description: "Get fake address zip code",
  args: [
    {
      displayName: "Country",
      type: "enum",
      options: allCountryCodes.map(code => ({
        displayName: getCountryName(code),
        value: code
      })),
      defaultValue: "FI"
    }
  ],
  run: async (context, country) => faker.address.zipCode(getZipCodeFormat(country))
};

exports.addressTimeZone = {
  name: "randomAddressTimeZone",
  displayName: "Random Address Time Zone",
  description: "Get random address time zone in a continent",
  args: [
    {
      displayName: "Continent",
      type: "enum",
      options: Object.keys(allTimeZones).map(name => ({ displayName: name, value: name })),
      defaultValue: "Europe"
    }
  ],
  run: async (context, continent) => {
    const timeZones = allTimeZones[continent];
    return timeZones ? faker.helpers.arrayElement(timeZones) : "UNKNOWN-CONTINENT";
  }
};
