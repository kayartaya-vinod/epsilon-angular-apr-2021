const fs = require("fs"); // core module; part of node js system

console.log("start of script");

const filename = "./ex02.js";

// const content = fs.readFileSync(filename, "utf-8");
// console.log(content);

fs.readFile(filename, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }
  console.log(content);
});

console.log("end of script");
