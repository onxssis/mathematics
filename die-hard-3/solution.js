function solve(a, b, c) {
  const res = gcd(a, b);

  if (c % res === 0 && (c <= a || c <= b)) {
    return 'YES';
  } else {
    return 'NO';
  }
}

function gcd(a, b) {
  if (b === 0) return a;
  else return gcd(b, a % b);
}
