// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.
function repeatFunction(fn, interval) {
  if (typeof fn !== "function") {
    throw new Error("First argument must be a function");
  }

  if (typeof interval !== "number" || interval <= 0) {
    throw new Error("Interval must be a positive number");
  }

  const intervalId = setInterval(fn, interval);

  return () => clearInterval(intervalId);
}



const stopRepeating = repeatFunction(()=> {
  console.log(`\r${new Date().toLocaleTimeString()}`);
}, 1000);

setTimeout(() => {
  stopRepeating();
  console.log("Stopped repeating.");
}, 10000);
