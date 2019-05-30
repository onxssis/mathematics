function connectingTowns(n, routes) {
  return routes.reduce((acc, val) => (acc * val) % 1234567, 1);
}
