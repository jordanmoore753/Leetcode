/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  let nArr = num.toString().split('').map((n) => parseInt(n));
  return isValid(nArr);
};

const isValid = function(arr) {
  const validEnds = [1,4,7,9];
  const invalidEnds = [2,3,7,8];
  const actualNum = parseInt(arr.join(''));
  
  if (invalidEnds.includes(arr[arr.length - 1])) {
    return false;
  }
  
  if (arr[arr.length - 1] === 0) {
    let zerosCount = 0;
    
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      if (arr[i] !== 0) {
        break;
      }
      
      zerosCount += 1;
    }
    
    return zerosCount % 2 === 0;
  }
  
  if (validEnds.indexOf(getDigitalRoot(actualNum)) === -1) {
    return false;
  }
  
  return hasSquareFactors(actualNum);
};

const getDigitalRoot = function(n) {
  if (n < 10) { return n; }
  
  let arr = n.toString().split('').map((num) => parseInt(num));
  let sum = 0;
  
  arr.forEach((num) => sum += num);
  
  return getDigitalRoot(sum);
};

const hasSquareFactors = function(n) {
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      if (i * i === n) { return true; }
    }
  }
  
  return false;
}