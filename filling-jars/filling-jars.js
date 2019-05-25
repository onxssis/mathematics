function solve(n, operations) {
  let candies = 0;

  for (const row of operations) {
    const [start, stop, value] = operations;
    candies += (stop - start + 1) * value;
  }

  return Math.floor(candies / n);
}
