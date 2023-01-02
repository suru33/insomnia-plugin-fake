const { faker } = require("@faker-js/faker");

exports.company = {
  name: "fakeCompany",
  displayName: "Fake Company",
  description: "Get fake company details",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Name", value: "name" },
      { displayName: "Suffix", value: "suffix" },
      { displayName: "Catch Phrase", value: "catchPhrase" },
      { displayName: "BS", value: "bs" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "name": return faker.company.name();
      case "suffix": return faker.company.companySuffix();
      case "catchPhrase": return faker.company.catchPhrase();
      case "bs": return faker.company.bs();
      default: return "UNKNOWN-COMPANY-CATEGORY";
    }
  }
};
