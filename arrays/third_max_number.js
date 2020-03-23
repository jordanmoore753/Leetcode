/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
  let usedNums = {};
  let maxNums = {
    one: undefined,
    two: undefined,
    three: undefined
  };
  
  for (let i = 0; i < nums.length; i += 1) {
    if (usedNums[nums[i]]) { 
      continue; 
    }
    
    maxNums = checkNums(maxNums, nums[i]);
    usedNums[nums[i]] = true;
  }
  
  return maxNums['three'] === undefined ? maxNums.one : maxNums.three;
};

const checkNums = function(obj, num) {
  const keys = ['one', 'two', 'three'];
  const values = [obj['one'], obj['two']];
  const [first, second] = values;
  let newObj = Object.assign({}, obj);
  
  for (let i = 0; i < keys.length; i += 1) {
    if (numIsGreater(keys[i], obj, num)) {
      if (keys[i] === 'one') {
        newObj['one'] = num;
        newObj['two'] = first;
        newObj['three'] = second;
      } else if (keys[i] === 'two') {
        newObj['two'] = num;
        newObj['three'] = second;
      } else {
        newObj['three'] = num;
      }
      
      return newObj;
    }  
  }
  
  return newObj;
};

const numIsGreater = function(key, obj, num) {
  return !obj[key] || obj[key] < num;
};