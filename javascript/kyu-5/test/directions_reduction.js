import assert from "assert";
import it from "node:test";
import dirReduc from "../directions_reduction.js";

it("Directions Reduction", function () {
  debugger;
  assert.deepStrictEqual(
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]),
    ["WEST"]
  );
  assert.deepStrictEqual(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), [
    "NORTH",
    "WEST",
    "SOUTH",
    "EAST",
  ]);
  assert.deepStrictEqual(
    dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]),
    []
  );
  assert.deepStrictEqual(
    dirReduc([
      "NORTH",
      "SOUTH",
      "NORTH",
      "SOUTH",
      "NORTH",
      "SOUTH",
      "EAST",
      "WEST",
      "EAST",
      "WEST",
    ]),
    []
  );
});
