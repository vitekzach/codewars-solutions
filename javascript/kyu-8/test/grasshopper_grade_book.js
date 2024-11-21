import assert from "node:assert/strict";
import { describe, it } from "node:test";
import getGrade from "../grasshopper_grade_book.js";

describe("Grasshopper grade book", function () {
  it("should return a A", function () {
    assert.equal(getGrade(95, 90, 93), "A");
    assert.equal(getGrade(100, 85, 96), "A");
    assert.equal(getGrade(92, 93, 94), "A");
  });
  it("should return a B", function () {
    assert.equal(getGrade(70, 70, 100), "B");
    assert.equal(getGrade(82, 85, 87), "B");
    assert.equal(getGrade(84, 79, 85), "B");
    assert.equal(getGrade(89, 89, 90), "B");
  });
  it("should return a C", function () {
    assert.equal(getGrade(70, 70, 70), "C");
    assert.equal(getGrade(75, 70, 79), "C");
    assert.equal(getGrade(60, 82, 76), "C");
  });
  it("should return a D", function () {
    assert.equal(getGrade(65, 70, 59), "D");
    assert.equal(getGrade(66, 62, 68), "D");
    assert.equal(getGrade(58, 62, 70), "D");
  });
  it("should return a F", function () {
    assert.equal(getGrade(44, 55, 52), "F");
    assert.equal(getGrade(48, 55, 52), "F");
    assert.equal(getGrade(58, 59, 60), "F");
  });
});
