const { faker } = require("@faker-js/faker");

exports.vehicle = {
  name: "fakeVehicle",
  displayName: "Fake Vehicle",
  description: "Get fake vehicle details",
  args: [{
    displayName: "Category",
    type: "enum",
    options: [
      { displayName: "Bicycle", value: "bicycle" },
      { displayName: "Fuel", value: "fuel" },
      { displayName: "Manufacturer", value: "manufacturer" },
      { displayName: "Model", value: "model" },
      { displayName: "Type", value: "type" },
      { displayName: "Name", value: "name" },
      { displayName: "VIN (Vehicle Identification Number)", value: "vin" },
      { displayName: "VRM (Vehicle Registration Number)", value: "vrm" }
    ]
  }],
  run: async (context, key) => {
    switch (key) {
      case "bicycle": return faker.vehicle.bicycle();
      case "fuel": return faker.vehicle.fuel();
      case "manufacturer": return faker.vehicle.manufacturer();
      case "model": return faker.vehicle.model();
      case "type": return faker.vehicle.type();
      case "name": return faker.vehicle.vehicle();
      case "vin": return faker.vehicle.vin();
      case "vrm": return faker.vehicle.vrm();
      default: return "UNKNOWN-VEHICLE-CATEGORY";
    }
  }
};
