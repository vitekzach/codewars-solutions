import assert from "assert";
import it from "node:test";
import towerBuilder from "../build_tower.js";

it("Build tower", function () {
  assert.deepStrictEqual(towerBuilder(1), ["*"]);
  assert.deepStrictEqual(towerBuilder(2), [" * ", "***"]);
  assert.deepStrictEqual(towerBuilder(3), ["  *  ", " *** ", "*****"]);
});
