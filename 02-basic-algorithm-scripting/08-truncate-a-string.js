// Solve the problem by truncating a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  return (num <= 0) ? ''
    : (str.length === num || str.length < num) ? str
    : `${str.slice(0, num)}...`;
}

truncateString("A-tisket a-tasket A green and yellow basket", -4); // ''
truncateString("A-tisket a-tasket A green and yellow basket", 8); // A-tisket...
truncateString("A-tisket a-tasket A green and yellow basket", 90); // A-tisket a-tasket A green and yellow basket


/*
================================
other solutions by freecodecamp
================================
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-truncate-a-string/16089
*/
