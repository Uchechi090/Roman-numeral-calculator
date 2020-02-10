import { Add, Subtract, Multiply } from "./TriggerFunctions";

export const convertToRoman = num => {
  let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let romanValue = "";

  for (let i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanValue += romans[i];
      num -= decimalValue[i];
    }
  }

  return romanValue;
};

const CharToInt = c => {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
};

export const RomanToInt = str => {
  if (str == null) return -1;
  let num = CharToInt(str.charAt(0));
  let previous, current;

  for (let i = 1; i < str.length; i++) {
    current = CharToInt(str.charAt(i));
    previous = CharToInt(str.charAt(i - 1));
    if (current <= previous) {
      num += current;
    } else {
      num = num - previous * 2 + current;
    }
  }

  return num;
};

export const Compute = (prevConValue, op, currConValue) => {
  switch (op) {
    case "+":
      return Add(prevConValue, currConValue);
    case "-":
      return Subtract(prevConValue, currConValue);
    case "*":
      return Multiply(prevConValue, currConValue);
    default:
      return null;
  }
};
