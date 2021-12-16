// solving the problem by creating a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  const funcResultOfArrEl = arr.map(item => func(item));
  const firstElIndexPassedTheFunc = funcResultOfArrEl.indexOf(true);
  const firstElPassedTheFunc = arr[firstElIndexPassedTheFunc];
  return firstElPassedTheFunc;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // 2


/*
================================
other solutions by freecodecamp
================================
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-finders-keepers/16016
*/
