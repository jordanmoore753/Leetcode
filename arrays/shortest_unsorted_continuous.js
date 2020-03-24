// first solution, time complexity not that good

/**
 * @param {number[]} nums
 * @return {number}
 */

const findUnsortedSubarray = function(nums) {
  const sortedNums = nums.slice(0).sort(sorter);
  const shallowNums = nums.slice(0);
  
  if (areSame(sortedNums, nums)) {
    return 0;
  }
  
  let start = 0;
  let windowSize = 2;
  let temp = shallowNums.slice(0);
  
  let firstSlice = [];
  let secondSlice = [];
  let thirdSlice = [];
  
  while (true) {
    for (let i = 0; i < start; i += 1) {
      firstSlice.push(temp.shift());
    }
    
    for (let i = 0; i < windowSize; i += 1) {
      secondSlice.push(temp.shift());
    }
    
    while (temp.length !== 0) {
      thirdSlice.push(temp.shift());
    }
    
    secondSlice.sort(sorter);
    firstSlice = firstSlice.concat(secondSlice).concat(thirdSlice);

    if (areSame(firstSlice, sortedNums)) {
      
      return secondSlice.length;
    }
    
    firstSlice = [];
    secondSlice = [];
    thirdSlice = [];
    temp = shallowNums.slice(0);
    
    if (windowSize === nums.length) {
      break;
    }
    
    if (start + windowSize >= nums.length) {
      start = 0;
      windowSize += 1;
    } else {
      start += 1;
    }
  }
  
  return nums.length;
};

const sorter = function(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

const areSame = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
};

// better solution for time complexity

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const sortedNums = nums.slice(0).sort(sorter);
  const indices = [0, nums.length - 1];
  let [start, end] = indices;
  
  while (nums[start] === sortedNums[start] && start < nums.length) { // breaks on start index of subarray
    start += 1;
  }
  
  if (start === nums.length) {                                       // if start element is at end of array it cannot be sorted
    return 0;
  }
  
  while (nums[end] === sortedNums[end] && end >= start) {            // breaks on end index of subarray
    end -= 1;
  }
  
  if (end <= start) {                                                // end cannot be less than or equal to start
    return 0;
  }
  
  return end - start + 1;                                            // compensate for length being 1 more than range of indexes
};

const sorter = function(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}