import assert from "assert";
import { describe, it } from "node:test";
import permutations from "../so_many_permutations.js";

function doTest(string, expected) {
  const actual = permutations(string);
  assert.deepStrictEqual(
    actual.sort(),
    expected.sort(),
    `for string "${string}"\n`
  );
}

describe("permutations", function () {
  it("sample tests", function () {
    doTest("a", ["a"]);
    doTest("ab", ["ab", "ba"]);

    doTest("aabb", ["aabb", "abab", "abba", "baab", "baba", "bbaa"]);
  });
});
