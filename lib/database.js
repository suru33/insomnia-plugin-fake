const { faker } = require("@faker-js/faker");

exports.database = {
  name: "randomDatabase",
  displayName: "Random Database",
  description: "Get random database",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Engine", value: "engine" },
      { displayName: "MongoDB Object Id", value: "mongodbObjectId" },
      { displayName: "Data Type", value: "dataType" },
      { displayName: "Column Name", value: "columnName" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "engine": return faker.database.engine();
      case "mongodbObjectId": return faker.database.mongodbObjectId();
      case "dataType": return faker.database.type();
      case "columnName": return faker.database.column();
      default: return "UNKNOWN-DATABASE-OPTION";
    }
  }
};
