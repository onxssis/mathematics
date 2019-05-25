// doesn't work well with large numbers, inefficient
function solve(n, operations) {
  const jars = Array(n).fill(0);
  for (let i = 0; i < operations.length; i++) {
    const [indexOne, indexTwo, value] = operations[i];
    for (let j = indexOne - 1; j < indexTwo; j++) {
      jars[j] = jars[j] += value;
    }
  }
  const sum = jars.reduce((acc, val) => acc + val, 0);
  return Math.floor(sum / n);
}
