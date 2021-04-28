// using a 3rd party package/module
const md5 = require("md5");
const { genSalt, hash } = require("bcrypt");

const { sleep } = require("./vinutils.js");

const password = "topsecret";
const hashedPassword = md5("topsecret");
console.log("password is", password);
sleep(3000);

console.log("hashedPassword is", hashedPassword);

genSalt(12, (err, salt) => {
  hash(password, salt, (err, _hash) => {
    if (err) {
      throw err;
    }
    console.log("bcrypt hashedPassword", _hash);
  });
});
