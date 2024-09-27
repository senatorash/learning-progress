function analyseSentence(sentence) {
  let charCount = 0;
  let wordCount = 0;
  let vowelCount = 0;

  for (let c of sentence) {
    charCount++;
    if (c === " ") {
      wordCount++;
    }
    if ("aeiouAEIOU".includes(c)) {
      vowelCount++;
    }
  }

  return { charCount, wordCount, vowelCount };
}

console.log(analyseSentence("I love javascript"));
