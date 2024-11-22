import assert from "assert";
import it from "node:test";
import highAndLow from "../highest_and_lowest.js";

it("Testing 1-2-3", function () {
  assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  assert.strictEqual(highAndLow("1 2 3"), "3 1");
});
