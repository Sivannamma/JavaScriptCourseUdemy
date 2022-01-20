// Remember, we're gonna use strict mode in all scripts now!
"use strict";
debugger;
const x = 23;
// because we created a snippet file, we can write log -> enter, and we will get the console.log faster.
console.log("");

// BUG - in order to make the colors, go to settings, and upper right side, there is +in a file, open
// settings in a json way, and we can add stuff there.
// TODO , FIXME

// the go live in the buttom of the page is making a window that is automatically refreshing
// when there is a change in the javaSctipt file.

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: 10,
    // value: Number(prompt("Degrees celsius:")),
  };

  // the function that creates a bug in the result
  // the thing that happens is that the result from the prompt is a string. and we know + is concatination
  // therefore we get 10273 instead 283
  // the solution was
  //   const kelvin = measurement.value + 273;
  //   return kelvin;

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
