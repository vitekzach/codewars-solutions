// Source: https://www.codewars.com/kata/544675c6f971f7399a000e79/solutions/javascript

function makeNegative(num) {
  if (num <= 0) {
    return num;
  }
  return -num;
}

console.log(makeNegative(1)); // return -1
console.log(makeNegative(-5)); // return -5
console.log(makeNegative(0)); // return 0
console.log(makeNegative(0.12)); // return -0.12
