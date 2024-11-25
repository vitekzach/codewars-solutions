export default function permutations(string) {
  let original = string.split("");
  let result = new Array();
  getPermutations(original, result, "");
  return result;
}

function filterDuplicates(item, idx, arr) {
  return arr.indexOf(item) === idx;
}

function getPermutations(options, result, currentResult) {
  if (options.length === 1) {
    currentResult = `${currentResult}${options[0]}`;
    result.push(currentResult);
    return;
  }
  let uniqueOptions = options.filter(filterDuplicates);
  for (let option of uniqueOptions) {
    let currentOptions = [...options];
    currentOptions.splice(currentOptions.indexOf(option), 1);
    getPermutations(currentOptions, result, `${currentResult}${option}`);
  }
}
