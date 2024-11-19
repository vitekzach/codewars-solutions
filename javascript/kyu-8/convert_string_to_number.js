// Source: https://www.codewars.com/kata/544675c6f971f7399a000e79/solutions/javascript

const stringToNumber = function(str){
  let num = Number(str);
  return num;
}

console.log(stringToNumber("10"));
console.log(stringToNumber("0"));
console.log(stringToNumber("-10"));
console.log(stringToNumber("1.0"));
console.log(stringToNumber("1.5"));
