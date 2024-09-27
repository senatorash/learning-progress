// A function that reverses a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello World!"));

// A function that counts the number of characters in a string
function countChars(str) {
  return str.length;
}

console.log(countChars("hello World!"));

// A function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeFirstLetter("hello world!"));

// A function that finds the maximum and minimum values in an array of numbers.
function findMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}

console.log(findMaxMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 15]));

// A function that  calculates the sum of all element in an array.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 15]));

// A function that filters out elements from an array based on a given condition
// function filterArray(arr, condition) {
//   return arr.filter(condition);
// }

// A function that to calculate the factorial of a given number
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// OR
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// A function that checks if a number is prime or not
const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(10));

// A function that generates the fibonacci sequence up to a given number of terms

const fibonacci = (n) => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};

console.log(fibonacci(10));
