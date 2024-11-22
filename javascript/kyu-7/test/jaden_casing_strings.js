import assert from "assert";
import { it } from "node:test";
import toJadenCase from "../jaden_casing_strings.js";

it("Jaden casing strings", function () {
  let str = "How can mirrors be real if our eyes aren't real";
  let expected = "How Can Mirrors Be Real If Our Eyes Aren't Real";
  assert.equal(str.toJadenCase(), expected);
});
