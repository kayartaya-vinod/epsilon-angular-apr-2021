console.log("start of script");

setTimeout(() => console.log("waiting for 3 seconds"), 3000);
setTimeout(() => console.log("waiting for 2 seconds"), 2000);
setTimeout(() => console.log("waiting for 1 seconds"), 1000);

sleep(4000);

console.log("end of script");

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
