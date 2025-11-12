// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
function delayAfterSecond(callback) {
  setTimeout(callback, 2000);
}

delayAfterSecond(() => {
  console.log("This runs after 2 seconds!");
});