import assert from "assert";
import { describe, it } from "node:test";
import solution from "../split_strings.js";

it("Split strings", () => {
  assert.deepStrictEqual(solution("abcdef"), ["ab", "cd", "ef"]);
  assert.deepStrictEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
  assert.deepStrictEqual(solution(""), []);
});
