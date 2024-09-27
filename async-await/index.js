// A function that Iterate with Async/Await
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await sleep(1000); // Wait for 1 second
  }
}

// Example usage:
iterateWithAsyncAwait(["A", "B", "C"]);

// A function that await a call
async function fetchData() {
  // Simulate API call with a delay
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data from API"), 2000)
  );
}

async function awaitCall() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

//handling errors with async and await
async function fetchData() {
  // Simulate API call with a possible error
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("API call failed")), 2000);
  });
}

async function awaitCall() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("An error occurred while fetching data:", error.message);
  }
}

// chaining async and await
function delay(ms, message) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(message);
      resolve();
    }, ms)
  );
}

async function functionOne() {
  await delay(1000, "Function One Complete");
}

async function functionTwo() {
  await delay(1000, "Function Two Complete");
}

async function functionThree() {
  await delay(1000, "Function Three Complete");
}

async function chainedAsyncFunctions() {
  await functionOne();
  await functionTwo();
  await functionThree();
}
