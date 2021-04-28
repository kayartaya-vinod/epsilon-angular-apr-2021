const a = require("./vinutils"); // executes one time; the exported member is cached; the same is returned
const b = require("./vinutils"); // gets the exported content from the cache
const c = require("./vinutils");

const sleep = require("./vinutils").sleep;
const fact = require("./vinutils").factorial;

// import { sleep, factorial as fact } from "./vinutils";

console.log("start of ex04.js");
a.sleep();
sleep();

const f = fact(5);
console.log(`factorial of 5 is ${f}`);

console.log("a is", a);
console.log("b is", b);
console.log("c is", c);

console.log("a===b is", a === b);
console.log("a===c is", a === c);
console.log("c===b is", c === b);
