//Source: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

export default function highAndLow(numbers) {
  // parseInt not necessary
  let numberParsed = numbers.split(" ").map((n) => parseInt(n));
  let maxAndMin = [Math.max(...numberParsed), Math.min(...numberParsed)];
  return maxAndMin.join(" ");
}
