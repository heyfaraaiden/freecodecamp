// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArray = [];
  while(arr.length > 0) {
    let chunkArr = arr.splice(0, size);
    newArray.push(chunkArr);
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // [ [ 0, 1, 2, 3 ], [ 4, 5 ] ]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // [ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [8] ]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // [[0, 1], [2, 3], [4, 5], [6, 7], [8]]

/*
=======================
other solutions by fcc
=======================
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-chunky-monkey/16005
*/
