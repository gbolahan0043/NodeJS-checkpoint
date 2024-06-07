// password-generator.js
const generator = require('generate-password');

function generatePassword() {
  const password = generator.generate({
    length: 10,
    numbers: true
  });
  console.log("Generated password:", password);
}

generatePassword();
