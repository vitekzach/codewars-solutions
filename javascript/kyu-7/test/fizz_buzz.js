import assert from "assert";
import { it } from "node:test";
import fizzbuzz from "../fizz_buzz.js";

it("Fizz Buzz", function () {
  assert.equal(
    JSON.stringify(fizzbuzz(15)),
    JSON.stringify([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ])
  );
});
