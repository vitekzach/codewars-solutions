import { describe, it } from "node:test";
import assert from "node:assert/strict";
import reverseWords from "../../kyu-7/reverse_words.js";

it("Reverse words", function () {
  assert.equal(
    reverseWords("The quick brown fox jumps over the lazy dog."),
    "ehT kciuq nworb xof spmuj revo eht yzal .god"
  );
  assert.equal(reverseWords("apple"), "elppa");
  assert.equal(reverseWords("a b c d"), "a b c d");
  assert.equal(reverseWords("double  spaced  words"), "elbuod  decaps  sdrow");
});
