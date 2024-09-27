// var someAdjective = "worthwhile";
// var myStr = "Learning to code is ";
// myStr += someAdjective;
// console.log(myStr); // Learning to code is worthwhile

// var firstNameLength = 0;
// var firstName = "Ashimi";
// firstNameLength = firstName.length;
// console.log(firstNameLength);

// var firstLetterOfTheLastName = "";
// var lastName = "Seide";
// firstLetterOfTheLastName = lastName[4];
// console.log(firstLetterOfTheLastName);

// function nextInLine(arr, item) {
//   arr.push(item);
//   return arr.shift();
// }

// var testArr = [1, 2, 3, 4, 5];
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// // boolean values

// function ourTrueOrFalse(isItTrue) {
//   if (isItTrue) {
//     return "Yes, it's true";
//   }
//   return "No, it's false";
// }

// console.log(ourTrueOrFalse(false));

// function testEqual(val) {
//   if (val === 12) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(testEqual("12"));

// function testStrict(val) {
//   if (val != 99) {
//     return "Not Equal";
//   }
//   return "Equal";
// }

// console.log(testStrict(10));

// function compareEquality(a, b) {
//   if (a === b) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(compareEquality(10, "10"));

function testEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testEqual(17));

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testGreaterThan(90));

function testElse(val) {
  if (val > 5) {
    result = "Bigger than 5";
  }
  if (val <= 5) {
    result = "5 or Smaller";
  }
  return result;
}
console.log(testElse(10));

function testElse(val) {
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
console.log(testElse(10));

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(10));

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num <= 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return " Large";
  } else {
    return "Huge";
  }
}

console.log(testSize(10));

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

console.log(caseInSwitch(4));

function trueOrFalse(a, b) {
  if (a < b) {
    return "true";
  }
  return "false";
}

console.log(trueOrFalse(10, 15));
