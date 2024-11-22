import assert from "assert";
import it from "node:test";
import score from "../greed_is_good.js";

it("Greed is good", function () {
  debugger;
  assert.strictEqual(
    score([2, 3, 4, 6, 2]),
    0,
    "Incorrect answer for dice = [2, 3, 4, 6, 2]"
  );

  assert.strictEqual(
    score([4, 4, 4, 3, 3]),
    400,
    "Incorrect answer for dice = [4, 4, 4, 3, 3]"
  );

  assert.strictEqual(
    score([2, 4, 4, 5, 4]),
    450,
    "Incorrect answer for dice = [2, 4, 4, 5, 4]"
  );
  assert.strictEqual(score([1, 2, 4, 3, 4]), 100, "Check for one 1");
  assert.strictEqual(score([1, 1, 1, 1, 4]), 1100, "Check for four 1");
  assert.strictEqual(score([5, 2, 4, 3, 4]), 50, "Check for one 5");
  assert.strictEqual(score([5, 5, 5, 5, 4]), 550, "Check for four 5");
  assert.strictEqual(score([1, 1, 2, 3, 6]), 200, "Double dice");
  assert.strictEqual(score([2, 2, 2, 2, 3]), 200, "More than 3");
});
