function solve(n) {
  const multiples = generateSeries();
  let ans;

  for (let i = 0; i < multiples.length; i++) {
    if (multiples[i] % n === 0) {
      ans = multiples[i];
      break;
    }
  }

  return ans;
}

function generateSeries() {
  const numbers = [];

  for (let i = 1; i <= 1e4; i++) {
    numbers.push(i.toString(2) * 9);
  }

  return numbers;
}
