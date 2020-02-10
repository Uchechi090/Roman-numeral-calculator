/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
/* eslint-disable eqeqeq */

export const SyntaxErr = value => {
  if (
    eval(value) == SyntaxError ||
    eval(value) == ReferenceError ||
    eval(value) == TypeError
  ) {
    return value == "Syntax Error";
  }
};

// export const Equals = value => {
//   if (value.indexOf("^") > -1) {
//     var base = value.slice(0, value.indexOf("^"));
//     var exponent = value.slice(value.indexOf("^") + 1);
//     value = eval("Math.pow(" + base + "," + exponent + ")");
//   } else {
//     value = eval(value);
//     //checkLength();
//     SyntaxErr();
//   }
// };

export const Multiply = (x, y) => x * y;

export const Add = (x, y) => x + y;

export const Subtract = (x, y) => x - y;

