//  A function that checks if a year is a leap year or not
const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else return false;
};
console.log(isLeapYear(2028));

// ticket pricing
const ticketPrice = (age) => {
  if (age <= 12) {
    return `$10`;
  } else if (age >= 13 && age <= 17) {
    return `$15`;
  } else if (age >= 18) {
    return `$20`;
  }
};
console.log(ticketPrice(100));

// a fumction that checks if a string is a palindrome
function isPalindrome(str) {
  // Helper function to normalize the string
  function normalizeString(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  }

  // Normalize the input string
  const normalizedStr = normalizeString(str);
  const len = normalizedStr.length;

  // Use two pointers to compare characters
  let left = 0;
  let right = len - 1;

  while (left < right) {
    // Compare characters at the left and right pointers
    if (normalizedStr[left] !== normalizedStr[right]) {
      return false; // Not a palindrome
    }
    // Move pointers towards the center
    left++;
    right--;
  }

  return true; // It's a palindrome
}
