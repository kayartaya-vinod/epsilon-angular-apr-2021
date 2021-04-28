console.log("Start of script.");
// execAfterdelay(function () {
//   console.log("Hello, world!");
// }, 3000);

// execAfterdelay(() => {
//   console.log("Hello, world!");
// }, 3000);

setTimeout(() => console.log("Hello, world!"), 1000);
console.log("End of script!");

function execAfterdelay(fn, duration = 1000) {
  // undefined, null, empty string, 0, false --> false
  if (!fn || typeof fn != "function") {
    throw `fn is expected to be a function, but got ${typeof fn}`;
  }

  if (!duration || typeof duration != "number") {
    throw `duration is expected to be a number, but got ${typeof duration}`;
  }

  sleep(duration);
  fn(); // because, fn is a function, we can execute the same
}

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
