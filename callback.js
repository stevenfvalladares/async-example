/* Example code with callback hell functions. */

//functions
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

// Execution
console.log("Starting process...");
greeting("Steven", (name) => {
  talk(() => {
    bye(name, () => {
      console.log("Finishing process...");
    });
  });
});
