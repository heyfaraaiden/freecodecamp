// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  let onlyTruthy = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) {
      onlyTruthy.push(arr[i]);
    }
  }
  return onlyTruthy;
}

bouncer([7, "ate", "", false, 9]); // [ 7, 'ate', 9 ]
bouncer(["a", "b", "c"]); // [ 'a', 'b', 'c' ]
bouncer([false, null, 0, NaN, undefined, ""]); // []
bouncer([null, NaN, 1, 2, undefined]); // [1, 2]


/*
=========================
other solutions from fcc
=========================
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-falsy-bouncer/16014
*/
