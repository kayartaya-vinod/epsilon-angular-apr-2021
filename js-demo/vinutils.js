console.log("vinutils.js loaded to VM");
const name = "vinod";

function sleep(duration = 1000) {
  console.log("Waiting for", duration, "millis...");
  const start = Date.now();
  while (true) {
    const curr = Date.now();
    if (curr - duration > start) {
      break;
    }
  }
}

function factorial(num = 1) {
  let f = 1;
  while (num) {
    f *= num--;
  }
  return f;
}

// module.exports is an empty object by default

// module.exports.sleep = sleep;
// module.exports.factorial = factorial;

// module.exports = { sleep: sleep, factorial: factorial };
module.exports = { sleep, factorial };
