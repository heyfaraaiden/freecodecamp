// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  const strToArrayOfWords = str.split(' ');
  const capitalizedTheFirstWord = strToArrayOfWords.map(word => `${word[0].toUpperCase() + word.slice(1).toLowerCase()}`);
  const arrayOfWordsToStr = capitalizedTheFirstWord.join(' ');
  
  return arrayOfWordsToStr;
}

titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
titleCase("sHoRt AnD sToUt"); // Short And Stout
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // Here Is My Handle Here Is My Spout


/*
=======================
other solutions by fcc
=======================
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-title-case-a-sentence/16088
*/
