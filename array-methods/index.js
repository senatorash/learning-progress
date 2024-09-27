// SLICE METHOD
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.slice(2, 5)); // [3, 4, 5]
// console.log(arr.slice(2)); // [3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr.slice(-2)); // [9, 10]
// console.log(arr.slice(1, -2)); // [2, 3, 4, 5, 6, 7, 8]
// console.log(arr);

// // SPLICE METHOD- mutates the original array
console.log(arr.splice(2)); //
// console.log(...arr);

// //REVERSE METHOD- mutates the original array
let arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());

// CONCAT METHOD
const letters = arr.concat(arr2);
console.log(letters);
// OR
console.log([...arr, ...arr2]);

// JOIN METHOD
console.log(letters.join(" - "));

// GETTING LAST ELEMEN OF AN ARRAY
console.log(letters[letters.length - 1]);
console.log(arr.slice(-1));
console.log(arr.at(-1));

//  FOR EACH METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`YOU DEPOSITED ${movement}`);
  } else {
    console.log(`YOU WITHDREW ${Math.abs(movement)}`);
  }
}

// MAPS METHOD

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET METHOD
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
