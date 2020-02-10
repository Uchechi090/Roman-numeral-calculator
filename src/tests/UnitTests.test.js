import React from "react";
import { create } from "react-test-renderer";
import renderer from "react-test-renderer";

import Keys from "../components/Keys";
import { Add, Subtract, Multiply } from "../components/TriggerFunctions";

describe("Keys class component", () => {
  test("it should make a snapshot test", () => {
    const keys = create(<Keys />);
    expect(keys.toJSON()).toMatchSnapshot();
  });
});

test("adds the args together", () => {
  expect(Add(1, 2)).toBe(3);
});

test("subtracts the args together", () => {
  expect(Subtract(4, 2)).toBe(2);
});

test("multiply the args together", () => {
  expect(Multiply(3, 2)).toBe(6);
});
