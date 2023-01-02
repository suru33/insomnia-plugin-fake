const { faker } = require("@faker-js/faker");

exports.word = {
  name: "randomWord",
  displayName: "Random Word",
  description: "Get random word",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Adjective", value: "adjective" },
      { displayName: "Adverb", value: "adverb" },
      { displayName: "Conjunction", value: "conjunction" },
      { displayName: "Interjection", value: "interjection" },
      { displayName: "Noun", value: "noun" },
      { displayName: "Preposition", value: "preposition" },
      { displayName: "Verb", value: "verb" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "adjective": return faker.word.adjective();
      case "adverb": return faker.word.adverb();
      case "conjunction": return faker.word.conjunction();
      case "interjection": return faker.word.interjection();
      case "noun": return faker.word.noun();
      case "preposition": return faker.word.preposition();
      case "verb": return faker.word.verb();
      default: return "UNKNOWN-WORD-OPTION";
    }
  }
};
