function random(min, max = 1) {
  if (typeof min != 'number' || typeof max != 'number') {
    return -1;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
export default random;
