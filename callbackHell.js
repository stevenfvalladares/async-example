/* Code with example of the asynchronous function. */

// Functions
function greeting(name, callback) {
  setTimeout(() => {
    console.log(`Hello ${name}!`);
    callback(name);
  }, 1000);
}

function talk(callbackTalk) {
  setTimeout(() => {
    console.log("Bla bla bla bla...");
    callbackTalk();
  }, 1000);
}

function bye(name, callbackBye) {
  setTimeout(() => {
    console.log(`Bye ${name}!`);
    callbackBye();
  }, 1000);
}

// Intermediate function (recursive function)
function toConverse(name, repetitions, callback) {
  if (repetitions > 0) {
    talk(() => {
      toConverse(name, --repetitions, callback);
    });
  } else {
    bye(name, callback);
  }
}

// Execution
console.log("Starting process...");
greeting("Steven", (name) => {
  toConverse(name, 3, () => {
    console.log("Finishing process...");
  });
});
