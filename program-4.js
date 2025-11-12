// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await

function asyncOperation1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Operation 1 completed");
      resolve();
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Operation 2 completed");
      resolve();
    }, 1000);
  });
}

function asyncOperation3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Operation 3 completed");
      resolve();
    }, 1000);
  });
}


async function runSequentialOperations() {
  try {
    await asyncOperation1();
    await asyncOperation2();
    await asyncOperation3();
  } catch (error) {
    console.error("Error during operations:", error);
  }
}
runSequentialOperations();
