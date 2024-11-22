//Source: https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

const singleScore = {
  1: 100,
  5: 50,
};

export default function score(dice) {
  let calculatedScore = 0;
  for (let i = 1; i <= 6; i++) {
    let acc = dice.reduce((acc, curr) => (curr == i ? acc + 1 : acc), 0);
    if (acc >= 3) calculatedScore += i * 100 + (i === 1 ? 900 : 0);
    if (i === 1 || i === 5) {
      let singles = acc >= 3 ? acc - 3 : acc;
      calculatedScore += singleScore[i] * singles;
    }
  }
  return calculatedScore;
}
