function solve(n) {
  if (n === 1 || n === 2) {
    return -1;
  } else {
    if (n % 2 !== 0) return 2;
    else if (n % 4 === 0) return 3;
    else return 4;
  }
}
