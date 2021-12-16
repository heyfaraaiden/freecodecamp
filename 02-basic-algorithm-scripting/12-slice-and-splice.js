// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let newArray = [...arr2];
  newArray.splice(n, 0, ...arr1);
  // console.log(arr1, arr2); // stay the same as the initial values a.k.a they didn't change
  return newArray;
}

// check
frankenSplice([1, 2, 3], [4, 5, 6], 1); // [ 4, 1, 2, 3, 5, 6 ]
frankenSplice([1, 2], ["a", "b"], 1); // [ 'a', 1, 2, 'b' ]
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); // [ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]
frankenSplice([1, 2, 3, 4], [], 0); // [1, 2, 3, 4]


/*
==================
reading materials
==================
https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/
*/

/*
=======================
other solutions by fcc
=======================
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-slice-and-splice/301148
*/
