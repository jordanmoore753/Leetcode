/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
  let missing = [];
  let numCounts = {};
  
  for (let i = 0; i < nums.length; i += 1) {
    numCounts[nums[i]] = true; // assign property to numCounts to reference in constant time
  }

  for (let i = 1; i <= nums.length; i += 1) {
    if (!numCounts[i]) { missing.push(i); } // if num doesnt exist as property it is missing
  }
  
  return missing;
};
