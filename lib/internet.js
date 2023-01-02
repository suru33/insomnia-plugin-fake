const { faker } = require("@faker-js/faker");

exports.randomInternet = {
  name: "randomInternet",
  displayName: "Random Internet",
  description: "Get random internet",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Domain Word", value: "domainWord" },
      { displayName: "Emoji", value: "emoji" },
      { displayName: "Http Method", value: "httpMethod" },
      { displayName: "Http Status Code", value: "httpStatusCode" },
      { displayName: "IPv4", value: "ipv4" },
      { displayName: "IPv6", value: "ipv6" },
      { displayName: "Password", value: "password" },
      { displayName: "User Agent", value: "userAgent" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "domainWord": return faker.internet.domainWord();
      case "emoji": return faker.internet.emoji();
      case "httpMethod": return faker.internet.httpMethod();
      case "httpStatusCode": return faker.internet.httpStatusCode();
      case "ipv4": return faker.internet.ipv4();
      case "ipv6": return faker.internet.ipv6();
      case "password": return faker.internet.password();
      case "port": return faker.internet.port();
      case "userAgent": return faker.internet.userAgent();
      default: return "UNKNOWN-RANDOM-INTERNET-OPTION";
    }
  }
};

exports.fakeInternet = {
  name: "fakeInternet",
  displayName: "Fake Internet",
  description: "Get fake internet",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Domain Name", value: "domainName" },
      { displayName: "Email", value: "email" },
      { displayName: "Example Email", value: "exampleEmail" },
      { displayName: "Mac Address", value: "mac" },
      { displayName: "URL", value: "url" },
      { displayName: "User Name", value: "userName" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "domainName": return faker.internet.domainName();
      case "email": return faker.internet.email();
      case "exampleEmail": return faker.internet.exampleEmail();
      case "mac": return faker.internet.mac();
      case "url": return faker.internet.url();
      case "userName": return faker.internet.userName();
      default: return "UNKNOWN-FAKE-INTERNET-OPTION";
    }
  }
};
