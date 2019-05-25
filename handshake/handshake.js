function handshake(n) {
  const members = [...Array(n).keys()];
  return members.reduce((acc, val) => acc + val, 0);
}
