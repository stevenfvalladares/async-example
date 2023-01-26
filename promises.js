/* Sample code with the use of promises. */

// Functions
function greeting(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hello ${name}!`);
      resolve(name);
    }, 1000);
  });
}

function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla bla...");
      resolve(name);
      reject("there is an error");
    }, 1000);
  });
}

function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bye ${name}!`);
      resolve();
    }, 1000);
  });
}

// Execution
console.log("Starting process..");
greeting("Steven")
  .then(talk)
  .then(bye)
  .then((name) => {
    console.log("Finishing process...");
  })
  .catch(error => {
    console.error(error);
  })