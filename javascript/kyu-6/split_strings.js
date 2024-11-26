export default function solution(str) {
  let strArr = str.split("");
  if (strArr.length === 0) return [];
  let evens = strArr.filter((x, i) => i % 2 === 0);
  let odds = strArr.filter((x, i) => i % 2 === 1);
  let final = evens.map((x, i) => (i < odds.length ? `${x}${odds[i]}` : x));
  if (final[final.length - 1].length === 1)
    final[final.length - 1] = `${final[final.length - 1]}_`;
  return final;
}
