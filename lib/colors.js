const { faker } = require("@faker-js/faker");

exports.hex = faker.color.rgb();
exports.name = faker.color.human();

exports.color = {
  name: "randomColor",
  displayName: "Random Color",
  description: "Get random color",
  args: [{
    displayName: "Color Type",
    type: "enum",
    options: [
      { displayName: "Hex", value: "hex" },
      { displayName: "Name", value: "name" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "hex": return faker.color.rgb();
      case "name": return faker.color.human();
      default: return faker.color.rgb();
    }
  }
};
