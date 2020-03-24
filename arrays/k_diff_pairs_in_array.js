/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const findPairs = function(nums, k) {
  let values = [{}, [], undefined, 0, 1];
  let [usedNums, pairs, pair, start, end] = values;
  
  nums.sort((a, b) => a - b);
  
  while (start < nums.length - 1) {
    if (usedNums[nums[start]] || Math.abs(nums[start] - nums[end]) > k) {
      start += 1;
      end = start + 1;
      continue;
    }
    
    if (Math.abs(nums[start] - nums[end]) === k) {
      pair = [nums[start], nums[end]];
      
      if (!usedNums[stringify(pair)]) {
        pairs.push(pair);
        usedNums[stringify(pair)] = true;
      }
    }
    
    if (end === nums.length - 1) {
      usedNums[nums[start]] = true;
      start += 1;
      end = start + 1;
      continue;
    }
    
    end += 1;
  }

  return pairs.length;
};

const stringify = function(arr) {
  return JSON.stringify(arr);
};