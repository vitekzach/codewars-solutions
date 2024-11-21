export default function reverseWords(str) {
  let words = str.split(" ");
  words = words.map((w) => w.split("").reverse().join(""));

  let reversed = words.join(" ");
  return reversed;
}
