// Source: https://www.codewars.com/kata/52cf02cd825aef67070008fa/train/javascript

// below here is actual algorithm, but it's really slow once the string gets long
const decodingArr =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? ".split(
    ""
  );

function decodeSingleChar(element, position) {
  let elementIndex = decodingArr.indexOf(element);
  if (elementIndex === -1) return element;
  elementIndex++;
  let calculatedIdx = 0.1;
  let multiplier = 0;
  while (!Number.isInteger(calculatedIdx)) {
    let nom;
    let denom;
    [nom, denom] = simplifyFraction(elementIndex + multiplier * 67, position);
    calculatedIdx = nom / 2 ** denom;
    multiplier++;
  }
  let decodedChar = decodingArr[calculatedIdx - 1];
  return decodedChar;
}

function simplifyFraction(nominator, denominatorPower) {
  let newNominator = nominator / 2;
  while (Number.isInteger(newNominator) & (denominatorPower > 0)) {
    nominator = newNominator;
    denominatorPower--;
    newNominator = nominator / 2;
  }
  //   let finalNominator = denominatorPower > 0 ? nominator : newNominator;
  return [nominator, denominatorPower];
}

function x(w) {
  let res = w
    .split("")
    .map((e, i) => decodeSingleChar(e, i + 1))
    .join("");
  return res;
}

// debugger;
let res = decodeSingleChar("y", 1);
console.log(res);
let res2 = x("yFNYhdmEdViBbxc40,ROYNxwfwvj");
console.log(res2);

// here is actual solution
// coule be made better by memorizing already found solutions
const decodingArr =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? ".split(
    ""
  );

function findDecodedChar(char, position) {
  for (let decodedChar of decodingArr) {
    let res = device.encode("_".repeat(position) + decodedChar);
    if (res.split("")[position] === char) {
      return decodedChar;
    }
  }
  return char;
}

device.decode = function (w) {
  return w
    .split("")
    .map((e, i) => findDecodedChar(e, i))
    .join("");
};
