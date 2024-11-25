export default function getPINs(observed) {
  // TODO: This is your job, detective!
  let observedArr = observed.split("");
  let results = new Array();
  getAllPins(observedArr, "", results);
  return results;
}

function getAllPins(currentLeft, currentPin, currentResults) {
  if (currentLeft.length === 0) {
    currentResults.push(currentPin);
    return;
  }
  let currentDigit = currentLeft.splice(0, 1)[0];
  let nextNumbers = getNumberAdjacents(currentDigit);
  nextNumbers.splice(0, 0, currentDigit);
  for (let nextNumber of nextNumbers) {
    let currentLeftCopy = [...currentLeft];
    getAllPins(currentLeftCopy, `${currentPin}${nextNumber}`, currentResults);
  }
}

function getNumberAdjacents(num) {
  switch (num) {
    case "0":
      return ["8"];
    case "1":
      return ["2", "4"];
    case "2":
      return ["1", "3", "5"];
    case "3":
      return ["2", "6"];
    case "4":
      return ["5", "1", "7"];
    case "5":
      return ["2", "4", "6", "8"];
    case "6":
      return ["3", "5", "9"];
    case "7":
      return ["4", "8"];
    case "8":
      return ["5", "7", "9", "0"];
    case "9":
      return ["8", "6"];
  }
}
