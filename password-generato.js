const generator = require("generate-password");

const password = generator.generate({
  length: 6,
  numbers: true,
});

console.log(password);