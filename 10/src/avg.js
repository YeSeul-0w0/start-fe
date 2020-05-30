function avg() {
  let result = 0;
  let num = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'object') {
      for (let j = 0; j < arguments[i].length; j++) {
        if (isNaN(arguments[i][j])) {
          num = arguments[i].length;
          num--;
        } else {
          result += arguments[i][j];
        }
      }
    } else {
      if (isNaN(arguments[i])) {
        num = arguments.length;
        num--;
      } else {
        result += arguments[i];
      }
    }
  }
  return result / num;
}

export default avg;
