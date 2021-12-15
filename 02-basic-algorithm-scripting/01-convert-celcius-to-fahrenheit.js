// Note: Celcius to Fahrenheit -> (9/5 * degree in celsius) + 32

function convertToF(celsius) {
  let fahrenheit = (9/5 * celsius) + 32;
  return fahrenheit;
}

convertToF(30);
