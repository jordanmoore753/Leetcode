/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function(c) {
  let rt = Math.sqrt(c); // the range of possible nums ends at square root of c
  let diff;

  for (let i = 0; i <= rt; i += 1) {
    diff = c - i ** 2; // this is what b squared needs to be
    
    if (isPerfectSquare(diff)) { // if b squared is perfect square
      return true;
    }
  }

  return false;
};

const isPerfectSquare = function(n) {
  let roundRoot = Math.round(Math.sqrt(n));
  return (Math.sqrt(n) - roundRoot) === 0;  // if it is an perfect square, it will be n - n === 0
};