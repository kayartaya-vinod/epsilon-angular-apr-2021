console.log("vinutils.js loaded to VM");

export function sleep(duration = 1000) {
  console.log("Waiting for", duration, "millis...");
  const start = Date.now();
  while (true) {
    const curr = Date.now();
    if (curr - duration > start) {
      break;
    }
  }
}

export function factorial(num = 1) {
  let f = 1;
  while (num) {
    f *= num--;
  }
  return f;
}
