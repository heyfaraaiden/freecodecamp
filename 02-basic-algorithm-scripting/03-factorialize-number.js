function factorialize(num) {
  let factorialized = 1;
  for(let i = 1; i <= num; i++) {
    factorialized *= i;
  }
  return factorialized;
}

factorialize(5); // 120

// Note: other solutions available by freecodecamp contributors -> https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-factorialize-a-number/16013
