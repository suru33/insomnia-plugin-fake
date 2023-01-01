const { faker } = require("@faker-js/faker");
const {
  allCountryCodes,
  allTimeZones,
  getCountryName,
  getZipCodeFormat
} = require("./data");

exports.address = {
  name: "randomAddress",
  displayName: "Random Address",
  description: "Get random address",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Building Number", value: "buildingNumber" },
      { displayName: "Cardinal Direction", value: "cardinalDirection" },
      { displayName: "City Name", value: "cityName" },
      { displayName: "Country Name", value: "countryName" },
      { displayName: "Country Code ISO-2", value: "countryCode2" },
      { displayName: "Country Code ISO-3", value: "countryCode3" },
      { displayName: "Direction", value: "direction" },
      { displayName: "Latitude", value: "latitude" },
      { displayName: "Longitude", value: "longitude" },
      { displayName: "Address Line 1", value: "addressLine1" },
      { displayName: "Address Line 2", value: "addressLine2" },
      { displayName: "Full Address", value: "addressFull" },
      { displayName: "State", value: "state" },
      { displayName: "Street Name", value: "streetName" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "buildingNumber": return faker.address.buildingNumber();
      case "cardinalDirection": return faker.address.cardinalDirection();
      case "cityName": return faker.address.cityName();
      case "countryName": return faker.address.country();
      case "countryCode2": return faker.address.countryCode("alpha-2");
      case "countryCode3": return faker.address.countryCode("alpha-3");
      case "direction": return faker.address.direction();
      case "latitude": return faker.address.latitude(90, -90, 6);
      case "longitude": return faker.address.longitude(180, -180, 6);
      case "addressFull": return faker.address.streetAddress(true);
      case "addressLine1": return faker.address.streetAddress(false);
      case "addressLine2": return faker.address.secondaryAddress();
      case "state": return faker.address.state();
      case "streetName": return faker.address.streetName();
      default: return "UNKNOWN-ADDRESS-CATEGORY";
    }
  }
};

exports.addressZipCode = {
  name: "randomAddressZipCode",
  displayName: "Random Address Zip Code",
  description: "Get random address zip code",
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
  description: "Get random address time zone",
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
