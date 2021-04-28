// using a 3rd party package/module
import md5 from "md5";
import { genSalt, hash as _hash } from "bcrypt";
import { sleep } from "./vinutils.mjs";

const password = "topsecret";
const hashedPassword = md5("topsecret");

console.log("password is", password);
sleep(2000);
console.log("hashedPassword is", hashedPassword);

genSalt(12, (err, salt) => {
  _hash(password, salt, (err, hash) => {
    if (err) {
      throw err;
    }
    console.log("bcrypt hashedPassword", hash);
  });
});
