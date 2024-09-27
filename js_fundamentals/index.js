// Math operators
// let age = 89;
// let seideAge = age - 25;
// let selomeAge = age - 54;
// console.log(seideAge, selomeAge);
// console.log(seideAge + selomeAge);
// console.log(seideAge < selomeAge);

// Asssignment operators
// let x = 35 + 10;
// x += 5;
// x += 10;
// x *= 15;
// x++;
// console.log(x);
// // challenge 1
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;
// let markBmi = markMass / markHeight ** 2;
// let johnBmi = johnMass / johnHeight ** 2;
// console.log(markBmi);
// console.log(johnBmi);

// let markHigherBmi = markBmi > johnBmi;
// console.log(markBmi > johnBmi);

// Strings and template literals
// const firstName = "seide";
// const job = "programmer";
// const birthYear = 1989;
// const year = 2080;
// const seide =
//   "i'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(seide);

// const seideNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(seideNew);

// console.log(`string
// with
// multiple
// lines`);

// Taking decisions: if/else statements
// const age = 15;

// const isOldEnough = age >= 18;
// if (isOldEnough) {
//   console.log(`Seide can start driving license 🚗`);
// } else {
//   yearsLeft = 18 - age;
//   console.log(`seide is too young. wait another ${yearsLeft} years`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// the switch statement

// const day = "saturday";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend");
//     break;
//   default:
//     console.log("not a valid day");
// }

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("enjoy the weekend");
// } else {
//   console.log("not a valid day");
// }

// the conditional (ternary) operator
// const age = 45;
// age >= 50;
//   ? console.log("I want to drink wine")
//   : console.log(`I want to drink water`);

// const drink = age >= 50 ? "wine" : "water";
// console.log(drink);

// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// challenge
// const bill = 275;

/* Write your code below. Good luck! 🙂 */
// const tip = 0.15 * bill;
// const tip1 = 0.2 * bill;
// const x = 50;
// if (x === 50) {
//   console.log(
//     `The bill was ${bill}, the tip was ${tip}, and the total value ${
//       bill + tip
//     }`
//   );
// } else if (x <= 300) {
//   console.log(
//     `The bill was ${bill}, the tip was ${tip}, and the total value ${
//       bill + tip
//     }`
//   );
// } else {
//   console.log(
//     `The bill was ${bill}, the tip was ${tip1}, and the total value ${
//       bill + tip1
//     }`
//   );
// }

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, amd the total value ${bill + tip}`
// );

// function senator() {
//   console.log("I am a senator");
// }
// senator();
// senator();
// senator();

// function declaration
// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));
// const juiceApples = fruitProcessor(2, 3);
// console.log(juiceApples);

// const appleOrangesJuice = fruitProcessor(5, 0);
// console.log(appleOrangesJuice);

// const num = Number("23"); //expression of a function
// console.log(num + 3);

// function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

//  Arrow function
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };
//Arrow function
// const calcAge3 = (birthyeah) => 2037 - birthyeah;
// const age3 = calcAge3(1991);
// console.log(age3);
// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1991, `seide`));

// function calling other function
// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);
//   const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(10, 5));

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// Array
// const friends = ["michael", "steven", "peter"];
// const newLength = friends.push("jay"); //add element to the end of the array and return the new length
// console.log(friends);
// console.log(newLength);

// friends.unshift("john"); //add element to the beginning of the array and return the new length
// console.log(friends);

//remove elements
// friends.pop(); //return the removed element
// console.log(friends);
// friends.shift(); //return the removed element
// console.log(friends);

// console.log(friends.indexOf("steven"));
// console.log(friends.indexOf("bob"));
// console.log(friends.includes("steven"));
// console.log(friends.includes("bob"));

/* Write your code below. Good luck! 🙂 */
// function calcTip(bill) {
//   const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
//   return tip;
// }
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

// object

// dot and bracket notation
// const jonas = {
//   firstName: "Seide",
//   lastName: "Ashimi",
//   age: 2045 - 1980,
//   job: "Programmer",
//   friends: ["michael", "stephen", "peter"],
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// jonas.location = "Nigeria";
// jonas["instagram"] = "seide__";
// console.log(jonas);
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// challenge

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}`
// );

// object methods

// const jonas = {
//   firstName: "Seide",
//   lastName: "Ashimi",
//   birthYeah: 1980,
//   job: "Programmer",
//   friends: ["michael", "stephen", "peter"],
//   hasDriversLicense: true,

//   calcAge: function (birthYeah) {
//     return 2037 - birthYeah;
//   },
// };

// console.log(jonas.calcAge(1980));
// console.log(jonas["calcAge"](1980));

// const senator = {
//   firstName: "Selome",
//   lastName: "Ashimi",
//   birthYeah: 1990,
//   job: "programmer",
//   friends: ["ope", "bimbo", "shade"],

//   hasDriversLicense: true,

// calcAge: function (birthYeah) {
//   return 2037 - birthYeah;
// },

// calcAge1: function () {
//   console.log(this);
//   return 2037 - this.birthYeah;
// },

// calcAge1: function () {
//   this.age = 2037 - this.birthYeah;
//   return this.age;
// },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge1()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(senator.calcAge1());
// console.log(senator.age);
// console.log(senator.getSummary());
// senator.calcAge1();

// challenge

// if (senator.hasDriversLicense) {
//   console.log(
//     `${senator.firstName} is a ${senator.age}-year old ${senator.job}, and she has a driver's license`
//   );
// } else {
//   console.log(
//     `${senator.firstName} is a ${senator.age}-year old ${senator.job}, and she has no driver's license`
//   );
// }

/* Write your code below. Good luck! 🙂 */
// const mark = {
//   fullName: "Mark Miller",
//   mass: "78",
//   height: "1.69",

//   calcBmi: function () {
//     bmi = this.mass / (this.height * this.height);
//     return bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: "92",
//   height: "1.95",

//   calcBmi: function () {
//     bmi = this.mass / (this.height * this.height);
//     return bmi;
//   },
// };

// console.log(john.calcBmi());
// console.log(mark.calcBmi());
// if (john.calcBmi() > mark.calcBmi()) {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBmi()}) is higher than ${
//       mark.fullName
//     }'s (${mark.calcBmi()})!`
//   );
// } else {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBmi()}) is higher than ${
//       john.fullName
//     }'s (${john.calcBmi()})!`
//   );
// }

// for loop... mostly used when the elements are true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

// const seideArray = [
//   "Seide",
//   "Ashimi",
//   2037 - 1980,
//   "Programmer",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < seideArray.length; i++) {
//   console.log(seideArray[i], typeof seideArray[i]);

// filling another aaray
// types[i] = typeof seideArray[i];
//   types.push(typeof seideArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   console.log(years[i], typeof years[i]);
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// continue and break
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < seideArray.length; i++) {
//   if (typeof seideArray[i] !== "string") continue;

//   console.log(seideArray[i], typeof seideArray[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < seideArray.length; i++) {
//   if (typeof seideArray[i] === "number") break;

//   console.log(seideArray[i], typeof seideArray[i]);
// }

// function sumArray(ashimiArray) {
//   let total = 0;
//   for (let i = 0; i < ashimiArray.length; i++) {
//     total += ashimiArray[i];
//   }
//   return total;
// }

// let total = sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
// console.log(total);

// function addArray(arrayOfNumbers) {
//   let total = 0;
//   for (let i = 0; i < arrayOfNumbers.length; i++) {
//     total += arrayOfNumbers[i];
//   }
//   return total;
// }
// let total = addArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 16, 17, 18]);

// console.log(total);

// let seArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 16, 17, 18];
// for (let i = 0; i <= seArray.length; i++) {
//   console.log([1, 2, 3, 4, 5, 6, ]);
// }

// looping backwards and loops in loops

// const seideArray = [
//   "Seide",
//   "Ashimi",
//   2037 - 1980,
//   "Programmer",
//   ["Michael", "Peter", "Steven"],
// ];

// for (let i = seideArray.length - 1; i >= 0; i--) {
//   console.log(i, seideArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: lifting weight repetition ${rep}`);
//   }
// }

// while loop
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: lifting weight repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`loop is about to end....`);
//   }
// }

function getFirstValue(arr) {
  return arr[0];
}
console.log(getFirstValue([5, 8, 9]));

// challenge

// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

/* Write your code below. Good luck! 🙂 */
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }

// console.log(bills, tips, totals);

// object destructuring
// const user = {
//   userName: "seide",
//   age: 50,
//   isGraduated: true,
//   score: 100,
// };

// const { userName, age, isGraduated, score } = user;
// console.log(userName, age, isGraduated, score);

// array destructuring

const users = [
  { username: "Abbey", age: 50 },
  { username: "Seide", age: 60 },
  { username: "jennifer", age: 70 },
];

// const [user1, user2, user3] = users;
// console.log(user1);

// for (user of users) {
//   if (user.username === "Seide") {
//     console.log(user);
//   }
// }

// for (i = 0; i < users.length; i++) {
//   if (users[i].username === "Seide") {
//     console.log(users[i]);
//   }
// }

// find method
// const foundUser = users.find((user) => user.username === "Seide");
// console.log(foundUser);

//  filter method
// const foundUser = users.filter((user) => user.age < 70);
// console.log(foundUser);

// function intToBinary(n) {
//   return n.toString(2);
// }
// console.log(intToBinary(10));

const noSpace = (x) => {
  return x.split(" ").join("");
};
console.log(noSpace("seide is a programmer"));

function smash(words) {
  words.split(" ").join(" ");
  return "";
}
console.log(["hello", "world", "this", "great"]);

const countSheeps = (arrayOfSheep) => {
  return arrayOfSheep.filter((sheep) => sheep === false).length;
};
console.log(countSheeps([true, true, false, true, false]));

function positiveSum(arr) {
  let total = 0;
  for (num of arr) {
    if (num < 0) {
      total = total;
    } else {
      total += num;
    }
  }

  return total;
}

function highAndLow(numbers) {
  // ...
  const nums = numbers.split(" ").map(Number);

  const highest = Math.max(...nums);
  const lowest = Math.min(...nums);
  return `Highest: ${highest}, Lowest: ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5 11 12 16 17 20 -5"));
