export default function justify(text, width) {
  let words = text.split(" ");
  let currIdx = 0;
  let lines = new Array();
  while (words.length > 0) {
    currIdx = getWordsForLine(words, width);
    lines.push([...words.slice(0, currIdx + 1)]);
    words = words.slice(currIdx + 1);
  }

  let formattedLines = lines
    .slice(0, lines.length - 1)
    .map((e) => formatLine(e, width));

  text = [...formattedLines, lines[lines.length - 1].join(" ")].join("\n");

  return text;
}

function getWordsForLine(words, width) {
  let idx = 0;
  let lineWords = new Array(words[0]);
  let length = lineWords[0].length;
  let spaces = 0;
  while ((length < width) & (idx < words.length - 1)) {
    idx++;
    lineWords.push(words[idx]);
    length += words[idx].length + 1;
    spaces++;
  }

  if (length > width) {
    return idx - 1;
  }
  return idx;
}

function formatLine(lineWords, width) {
  let spaceCount = lineWords.length - 1;
  let lineLength =
    lineWords.reduce((acc, curr) => acc + curr.length + 1, 0) - 1;
  let extraSpace = width - lineLength;
  let baseExtraSpace = Math.floor(extraSpace / spaceCount);
  let overExtraSapce = extraSpace % spaceCount;
  lineWords = lineWords.map((e, idx) => {
    let extra;
    if (idx < lineWords.length - 1) {
      extra = overExtraSapce > idx ? 1 : 0;
    } else {
      extra = 0;
      baseExtraSpace = 0;
    }
    return `${e}${" ".repeat(baseExtraSpace + extra)}`;
  });

  lineWords = lineWords.join(" ");
  return lineWords;
}

// let res = justify("Hello world, how are you doing my old friend?", 20);
// let toTry = [
//   "12345 12345 12345 12345 12345 12345 12345 12345 12345 12345",
//   "12345 12345 12345 12345 12345 12345 12345 12345 12345",
//   "12345 12345 12345 12345 12345 12345 12345 12345",
//   "12345 12345 12345 12345 12345 12345 12345",
//   "12345 12345 12345 12345 12345 12345",
//   "12345 12345 12345 12345 12345",
//   "12345 12345 12345",
//   "12345 12345",
//   "12345",
// ];
// for (let t of toTry) {
//   let res = fomatLine(t.split(" "), 60);
//   console.log(res.join(" "));
// }

// let toTest = "12345 12345 12345 12345 12345 12345 12345 12345 12345 12345";
// let width = 16;
// let res = justify(toTest, width);
// console.log(res);
