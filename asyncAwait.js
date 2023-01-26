/* Example of asynchronous functions. */

// Functions
async function greeting(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hello ${name}!`);
      resolve(name);
    }, 1000);
  });
}

async function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla bla...");
      resolve(name);
      reject("there is an error");
    }, 1000);
  });
}

async function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bye ${name}!`);
      resolve();
    }, 1000);
  });
}

async function main() {
  let name = await greeting("Steven");
  await talk();
  await bye(name);
  console.log("Finishing process...");
}

// Execution
console.log("Starting process..");
main();

