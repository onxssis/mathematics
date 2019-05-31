function solve(n) {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4)
    ? 'IsFibo'
    : 'IsNotFibo';
}

function isPerfectSquare(n) {
  let s = Math.sqrt(n);
  return Math.floor(s) === s;
}
