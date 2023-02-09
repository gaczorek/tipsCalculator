const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

calcTip = (x) => {
  x >= 50 && x <= 300 ? (tip = x * 0.15) : (tip = x * 0.2);
  return tip;
};

for (i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);

let average

const calcAverage = (arr) => {
  let sum = 0;
  for (let x = 0; x < arr.length; x++) {
    sum += arr[x];
  }
  average = sum / arr.length
};
calcAverage(bills)
console.log(`the average of array is ${average}`)


