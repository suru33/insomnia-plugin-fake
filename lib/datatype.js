const { faker } = require("@faker-js/faker");

exports.datatypeNumber = {
  name: "randomDatatypeNumber",
  displayName: "Random Number",
  description: "Get random number",
  args: [
    {
      displayName: "Minimum",
      type: "number",
      defaultValue: 0
    },
    {
      displayName: "Maximum",
      type: "number",
      defaultValue: 1000
    },
    {
      displayName: "Float",
      type: "boolean",
      defaultValue: false
    },
    {
      displayName: "Precision (only works for float) min 1 max 8, default to 4",
      type: "number",
      defaultValue: 4
    }
  ],
  run: async (context, min, max, float, precision) => {
    if (float) {
      const pow = 1 / Math.pow(10, precision < 1 || precision > 8 ? 4 : precision);
      const num = `${faker.datatype.number({ min: min, max: max, precision: pow })}`;
      return num.substring(0, 1 + precision + num.indexOf("."));
    } else {
      return faker.datatype.number({ min: min, max: max });
    }
  }
};

exports.datatypeBoolean = {
  name: "randomDatatypeBoolean",
  displayName: "Random Boolean",
  description: "Get random boolean",
  args: [],
  // eslint-disable-next-line no-unused-vars
  run: async (context) => faker.datatype.boolean()
};

exports.datatypeHexadecimal = {
  name: "randomDatatypeHexadecimal",
  displayName: "Random Hexadecimal",
  description: "Get random hexadecimal",
  args: [
    {
      displayName: "Case",
      type: "enum",
      options: [
        { displayName: "Lower", value: "lower" },
        { displayName: "Upper", value: "upper" }
      ]
    },
    {
      displayName: "Length",
      description: "Length of the value minimum 1 maximum 64, defaults to 4",
      type: "number",
      defaultValue: 4
    }
  ],
  run: async (context, hexCase, length) => {
    length = length < 1 || length > 64 ? 4 : length;
    return faker.datatype.hexadecimal({ case: hexCase, length: length });
  }
};

exports.datatypeString = {
  name: "randomDatatypeString",
  displayName: "Random String",
  description: "Get random string",
  args: [
    {
      displayName: "Case",
      type: "enum",
      options: [
        { displayName: "Lower", value: "lower" },
        { displayName: "Upper", value: "upper" },
        { displayName: "Mixed", value: "mixed" }
      ],
      defaultValue: "mixed"
    },
    {
      displayName: "Length",
      description: "Length of the value minimum 1 maximum 10000, defaults to 10",
      type: "number",
      defaultValue: 10
    }
  ],
  run: async (context, stringCase, length) => {
    length = length < 1 || length > 10000 ? 10 : length;
    const str = faker.datatype.string(length);
    switch (stringCase) {
      case "lower": return str.toLowerCase();
      case "upper": return str.toUpperCase();
      default: return str;
    }
  }
};

exports.datatypeUUID = {
  name: "randomDatatypeUUID",
  displayName: "Random UUID",
  description: "Get random UUID",
  args: [],
  // eslint-disable-next-line no-unused-vars
  run: async (context) => faker.datatype.uuid()
};
