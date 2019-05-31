function solve(n) {
  //   const multiples = generateSeries();
  let ans;
  let i = 1;

  while (i < Infinity) {
    let bin = i.toString(2) * 9;

    if (parseInt(bin) % n == 0) {
      ans = bin;
      break;
    } else {
      i++;
    }
  }

  //   for (let i = 0; i < multiples.length; i++) {
  //     if (multiples[i] % n === 0) {
  //       ans = multiples[i];
  //       break;
  //     }
  //   }

  return ans;
}

function generateSeries() {
  const numbers = [];

  for (let i = 1; i <= 1e4; i++) {
    numbers.push(i.toString(2) * 9);
  }

  return numbers;
}
