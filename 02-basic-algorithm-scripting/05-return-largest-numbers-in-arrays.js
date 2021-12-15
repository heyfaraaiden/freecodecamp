// Solve the problem by returning an array consisting of the largest number from each provided sub-array.

/*
===============
first solution
===============
*/
function largestOfFour(arr) {
  const largestNumbers = [];
  for(let i = 0; i < arr.length; i++) {
    largestNumbers.push(Math.max(...arr[i]));
  }
  return largestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [5, 27, 39, 1001]


/*
===============
second solution
===============
*/
function largestOfFour(arr) {
  return arr.map(item => Math.max(...item));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [5, 27, 39, 1001]


/*
================================
other solutions by freecodecamp
================================
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-return-largest-numbers-in-arrays/16042
*/
