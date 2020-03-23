/**
 * @param {number[]} nums
 * @return {boolean}
 
 P: given an array of integers, check if the array is completely non-decreasing order by changing at MOST
 1 element
 
 E: 
 [4,2,3] => true, 4 can become 1 and the array is non-decreasing
 [4, 2, 1] => false, 4 and 2 both must change

 DS: Use a for loop and an array with pointer.
 Alg: This is going to be O(n) time. 
 
 Use a sliding window of 2 elements to ascertain if first is greater than second.
 - start at 0th index
 - invoke a loop which runs while the index is less than length of input array
 - increment index by 1 each iteration
 - if the element in window at index 0 of window is greater than element at index 1, it's an invalid order.
    - now, look at the previous, next and current element.
    - if prev element is greater than next AND current element is greater than next, next is re-assigned to current element
    - if current element is greater than next, current element is re-assigned to next element's value
  - reassign variable with alreadyModified false to true, now if there is an invalid window, it will return false immediately
  - if we get through loop, return true
  
 */
 
const checkPossibility = function(nums) {
  const givens = [0, false];
  let [curr, alreadyModified] = givens;
  
  while (curr < nums.length) {
    if (isInvalid(curr, nums)) {
      if (alreadyModified) { return false; }
      
      nums = createNewArr(curr, nums);
      alreadyModified = true;
    }
    
    curr += 1;
  }
  
  return true;
};

const isInvalid = function(idx, arr) {
  return arr[idx] > arr[idx + 1];
};

const createNewArr = function(idx, arr) {
  const prevNum = idx === 0 ? undefined : arr[idx - 1];
  const nextNum = arr[idx + 1];
  let newArr = Object.assign([], arr);
  
  if (arr[idx] > nextNum && (prevNum && prevNum > nextNum)) {
    newArr[idx + 1] = newArr[idx];
  } else if (arr[idx] > nextNum) {
    newArr[idx] = nextNum;
  }
  
  return newArr;
};