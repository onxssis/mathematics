function findPoint(px, py, qx, qy) {
  // formula to find midpoint between (rx, ry) (px, py)
  // mx = (rx + px) / 2, my = (ry + py) / 2
  return [2 * qx - px, 2 * qy - py];
}
