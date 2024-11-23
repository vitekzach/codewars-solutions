export default function incrementString(strng) {
  // return incrementedString
  let stringArray = strng.split("");
  let searchIdx = -1;
  let strNum = "";
  let keepSearching = stringArray.length > 0;
  while (-searchIdx <= stringArray.length && keepSearching) {
    let currentCharacter = stringArray[stringArray.length + searchIdx];
    if (!isNaN(parseInt(currentCharacter))) {
      strNum = `${currentCharacter}${strNum}`;
      searchIdx -= 1;
    } else {
      keepSearching = false;
    }
  }
  let newString = "";
  if (strNum === "") {
    newString = `${stringArray.join("")}1`;
  } else {
    let newNumber = (parseInt(strNum) + 1)
      .toString()
      .padStart(strNum.length, "0");
    newString = `${stringArray
      .slice(0, stringArray.length - strNum.length)
      .join("")}${newNumber}`;
  }
  return newString;
}
