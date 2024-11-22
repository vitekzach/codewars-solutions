// Source: https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

export default String.prototype.toJadenCase = function () {
  let words = this.split(" ");
  let wordsCapitalized = words.map((w) => {
    if (this.length === 0) return w;
    return w.charAt(0).toUpperCase() + w.slice(1);
  });
  let jadenCased = wordsCapitalized.join(" ");
  return jadenCased;
};
