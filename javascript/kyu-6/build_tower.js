export default function towerBuilder(nFloors) {
  let tower = [];
  let towerWidth = 2 * nFloors - 1;

  for (let i = 1; i <= nFloors; i++) {
    let asterisks = 2 * i - 1;
    let spaces = (towerWidth - asterisks) / 2;
    let level = " ".repeat(spaces) + "*".repeat(asterisks) + " ".repeat(spaces);
    tower.push(level);
  }
  return tower;
}
