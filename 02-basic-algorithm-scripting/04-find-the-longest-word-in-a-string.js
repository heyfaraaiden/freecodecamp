// Note: return the length of the longest word in the provided sentence.

/*
===============
first solution -> return only the longest word's total characters
===============
*/

function findLongestWordLength(str) {
  let theLongestWord = '';

  const splitStrToArray = str.split(' ');
  splitStrToArray.forEach(str => {
    if(theLongestWord.length < str.length) {
      theLongestWord = str;
    }
  });

  return theLongestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // 6


/*
===============
second solution -> return only the longest word
===============
*/

function findLongestWordLength(str) {
  let theLongestWord = '';

  const splitStrToArray = str.split(' ');
  splitStrToArray.forEach(str => {
    if(theLongestWord.length < str.length) {
      theLongestWord = str;
    }
  });

  return theLongestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // 6


/*
===============
third solution -> return the longest word and its total characters
===============
*/

function findLongestWordLength(str) {
  let theLongestWord = '';

  const splitStrToArray = str.split(' ');
  splitStrToArray.forEach(str => {
    if(theLongestWord.length < str.length) {
      theLongestWord = str;
    }
  });

  return `The longest word in '${str}' sentence is '${theLongestWord}' with ${theLongestWord.length} characters long.`;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
// The longest word in 'The quick brown fox jumped over the lazy dog' sentence is 'jumped' with 6 characters long.


/*
================================
other solutions by freecodecamp
================================
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-find-the-longest-word-in-a-string/16015
*/
