/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const findPairs = function(nums, k) {
  let values = [{}, [], undefined, 0, 1, undefined];
  let [usedNums, pairs, pair, start, end, string] = values;
  
  nums.sort((a, b) => a - b);
  
  while (start < nums.length - 1) {
    if (isInvalid(usedNums, nums[start], nums[end], k)) {
      start += 1;
      end = start + 1;
      continue;
    }
    
    if (isDiff(nums[start], nums[end], k)) {
      pair = [nums[start], nums[end]];
      string = stringify(pair);
      
      if (!usedNums[string]) {
        pairs.push(pair);
        usedNums[string] = true;
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

const isDiff = function(first, second, k) {
  return Math.abs(first - second) === k;
};

const isInvalid = function(used, first, second, k) {
  return used[first] || Math.abs(first - second) > k;
};