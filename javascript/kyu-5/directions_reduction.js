export default function dirReduc(arr) {
  // could be made better by not joining by comma
  const regex = /NORTH,SOUTH|SOUTH,NORTH|WEST,EAST|EAST,WEST/gi;
  let after = arr.join(",");
  let before;
  let keepGoing = true;
  while (keepGoing) {
    before = after;
    after = after.replace(regex, "");
    after = after.replace(/[,]+/g, ",");
    after = after.replace(/^,|,$/g, "");
    keepGoing = before !== after;
  }
  let toReturn = after.length > 0 ? after.split(",") : [];
  return toReturn;
}
