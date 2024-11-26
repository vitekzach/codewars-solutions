//Source: https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript

export default function pickPeaks(arr) {
  let peaks = {
    pos: [],
    peaks: [],
  };

  if (arr.length < 3) return peaks;

  let i = 1;
  let candidatePos = -1;
  let candidateVal = -1;

  while (i < arr.length - 1) {
    let current = arr[i];
    let before = arr[i - 1];
    let after = arr[i + 1];

    // simple peak
    if (before < current && current > after) {
      peaks.pos.push(i);
      peaks.peaks.push(current);
      i++;
      continue;
    }

    // beginning on plateau
    if (before < current && current === after) {
      candidatePos = i;
      candidateVal = current;

      // walk plateau until up/down is next
      while (current === after && i < arr.length) {
        // at the end of array, no way of max
        if (i == arr.length - 1) continue;
        i++;
        current = arr[i];
        after = arr[i + 1];
      }

      // check if pleateau was peak or not
      if (after < current) {
        peaks.pos.push(candidatePos);
        peaks.peaks.push(candidateVal);
      }
    }

    i++;
  }

  return peaks;
}
