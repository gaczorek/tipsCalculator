let tip;
let bill = prompt("what's you bill?");
calcTip = (x) => {
  x >= 50 && x <= 300 ? (tip = x * 0.15) : (tip = x * 0.2);
  return tip;
};
calcTip(bill);

console.log(`You should leave ${tip}$ tip`);

const bills = [125, 555, 44];
const tips = bills.map(calcTip);

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
