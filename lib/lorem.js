const { faker } = require("@faker-js/faker");

exports.lorem = {
  name: "random",
  displayName: "Random ",
  description: "Get random ",
  args: [
    {
      displayName: "Category",
      type: "enum",
      options: [
        { displayName: "Lines", value: "lines" },
        { displayName: "Paragraph", value: "paragraph" },
        { displayName: "Paragraphs", value: "paragraphs" },
        { displayName: "Sentence", value: "sentence" },
        { displayName: "Sentences", value: "sentences" },
        { displayName: "Slug", value: "slug" },
        { displayName: "Text", value: "text" },
        { displayName: "Word", value: "word" },
        { displayName: "Words", value: "words" }
      ],
      defaultValue: "words"
    },
    {
      displayName: "Size",
      description: "Length or Count of the words, sentences or paragraphs",
      type: "number",
      defaultValue: 4
    }
  ],
  run: async (context, key, size) => {
    switch (key) {
      case "lines": return faker.lorem.lines(size);
      case "paragraph": return faker.lorem.paragraph(size);
      case "paragraphs": return faker.lorem.paragraphs(size);
      case "sentence": return faker.lorem.sentence(size);
      case "sentences": return faker.lorem.sentences(size);
      case "slug": return faker.lorem.slug(size);
      case "text": return faker.lorem.text();
      case "word": return faker.lorem.word({ length: size, strategy: "any-length" });
      case "words": return faker.lorem.words(size);
      default: return "UNKNOWN-LOREM-OPTION";
    }
  }
};

