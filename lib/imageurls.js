const { faker } = require("@faker-js/faker");

exports.imageURLs = {
  name: "randomImageURLs",
  displayName: "Random Image URLs",
  description: "Get random Image URLs",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Abstract Art", value: "abstract" },
      { displayName: "Animals", value: "animals" },
      { displayName: "Avatar", value: "avatar" },
      { displayName: "Business", value: "business" },
      { displayName: "Cats", value: "cats" },
      { displayName: "City", value: "city" },
      { displayName: "SVG Data URI", value: "dataUri" },
      { displayName: "Fashion", value: "fashion" },
      { displayName: "Food", value: "food" },
      { displayName: "Image", value: "image" },
      { displayName: "Nature", value: "nature" },
      { displayName: "Nightlife", value: "nightlife" },
      { displayName: "People", value: "people" },
      { displayName: "Sports", value: "sports" },
      { displayName: "Technics", value: "technics" },
      { displayName: "Transport", value: "transport" }
    ],
    defaultValue: "image"
  }],
  run: async (context, key) => {
    switch (key) {
      case "abstract": return faker.image.abstract();
      case "animals": return faker.image.animals();
      case "avatar": return faker.image.avatar();
      case "business": return faker.image.business();
      case "cats": return faker.image.cats();
      case "city": return faker.image.city();
      case "dataUri": return faker.image.dataUri();
      case "fashion": return faker.image.fashion();
      case "food": return faker.image.food();
      case "image": return faker.image.image();
      case "nature": return faker.image.nature();
      case "nightlife": return faker.image.nightlife();
      case "people": return faker.image.people();
      case "sports": return faker.image.sports();
      case "technics": return faker.image.technics();
      case "transport": return faker.image.transport();
      default: return "UNKNOWN-IMAGE-URLS-OPTION";
    }
  }
};
