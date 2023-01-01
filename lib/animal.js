const { faker } = require("@faker-js/faker");

exports.animal = {
  name: "randomAnimal",
  displayName: "Random Animal",
  description: "Get random animal name",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Bear", value: "bear" },
      { displayName: "Bird", value: "bird" },
      { displayName: "Cat", value: "cat" },
      { displayName: "Cetacean", value: "cetacean" },
      { displayName: "Cow", value: "cow" },
      { displayName: "Crocodilia", value: "crocodilia" },
      { displayName: "Dog", value: "dog" },
      { displayName: "Fish", value: "fish" },
      { displayName: "Horse", value: "horse" },
      { displayName: "Insect", value: "insect" },
      { displayName: "Lion", value: "lion" },
      { displayName: "Rabbit", value: "rabbit" },
      { displayName: "Rodent", value: "rodent" },
      { displayName: "Snake", value: "snake" },
      { displayName: "Type", value: "type" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "bear": return faker.animal.bear();
      case "bird": return faker.animal.bird();
      case "cat": return faker.animal.cat();
      case "cetacean": return faker.animal.cetacean();
      case "cow": return faker.animal.cow();
      case "crocodilia": return faker.animal.crocodilia();
      case "dog": return faker.animal.dog();
      case "fish": return faker.animal.fish();
      case "horse": return faker.animal.horse();
      case "insect": return faker.animal.insect();
      case "lion": return faker.animal.lion();
      case "rabbit": return faker.animal.rabbit();
      case "rodent": return faker.animal.rodent();
      case "snake": return faker.animal.snake();
      case "type": return faker.animal.type();
      default: return "UNKNOWN-ANIMAL-CATEGORY";
    }
  }
};
