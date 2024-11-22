import assert from "assert";
import it from "node:test";
import number from "../testing_1_2_3.js";

it("Testing 1-2-3", function () {
  assert.deepStrictEqual(
    number([]),
    [],
    "Empty array should return empty array"
  );
  assert.deepStrictEqual(
    number(["a", "b", "c"]),
    ["1: a", "2: b", "3: c"],
    "Return the correct line numbers"
  );
});
