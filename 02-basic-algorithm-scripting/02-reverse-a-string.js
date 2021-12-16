// first solution
function reverseString(str) {
  let reversedString = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
reverseString("hello"); // olleh


// second solution
function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString("hello"); // olleh
