//Source https://www.codewars.com/kata/52fba66badcd10859f00097e

// Mine, less performant solutions
// export default function disemvowel(str) {
//   let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
//   return str
//     .split("")
//     .filter((c) => !vowels.includes(c))
//     .join("");
// }

export default function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
