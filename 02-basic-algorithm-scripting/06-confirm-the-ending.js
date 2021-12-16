// Solve the problem by checking if a string (first argument, str) ends with the given target string (second argument, target). Don't solve this problem using .endsWith() method.

function confirmEnding(str, target) {
  const regexEndChar = RegExp(`${target}$`);
  return regexEndChar.test(str);
}

confirmEnding("Bastian", "n"); // true


/*
==================
reading materials
==================
on how to use template literal in a regex -> https://stackoverflow.com/questions/43390873/template-literal-inside-of-the-regex/43391072
*/


/*
==================================
other solutions from freecodecamp
==================================
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-confirm-the-ending/16006
*/
