const { faker } = require("@faker-js/faker");

exports.internet = {
  name: "randomInternet",
  displayName: "Random Internet",
  description: "Get random internet",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Domain Name", value: "domainName" },
      { displayName: "Domain Word", value: "domainWord" },
      { displayName: "Email", value: "email" },
      { displayName: "Emoji", value: "emoji" },
      { displayName: "Example Email", value: "exampleEmail" },
      { displayName: "Http Method", value: "httpMethod" },
      { displayName: "Http Status Code", value: "httpStatusCode" },
      { displayName: "IPv4", value: "ipv4" },
      { displayName: "IPv6", value: "ipv6" },
      { displayName: "Mac Address", value: "mac" },
      { displayName: "Password", value: "password" },
      { displayName: "Port", value: "port" },
      { displayName: "URL", value: "url" },
      { displayName: "User Agent", value: "userAgent" },
      { displayName: "User Name", value: "userName" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "domainName": return faker.internet.domainName();
      case "domainWord": return faker.internet.domainWord();
      case "email": return faker.internet.email();
      case "emoji": return faker.internet.emoji();
      case "exampleEmail": return faker.internet.exampleEmail();
      case "httpMethod": return faker.internet.httpMethod();
      case "httpStatusCode": return faker.internet.httpStatusCode();
      case "ipv4": return faker.internet.ipv4();
      case "ipv6": return faker.internet.ipv6();
      case "mac": return faker.internet.mac();
      case "password": return faker.internet.password();
      case "port": return faker.internet.port();
      case "url": return faker.internet.url();
      case "userAgent": return faker.internet.userAgent();
      case "userName": return faker.internet.userName();
      default: return "UNKNOWN-INTERNET-OPTION";
    }
  }
};
