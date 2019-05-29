function lights(n) {
  let val = 1;

  for (let i = 0; i < n; i++) {
    val *= 2;
    // mod val after each calc
    val = val % 100000;
  }
  return val - 1;
}
