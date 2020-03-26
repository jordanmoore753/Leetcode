/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const canPlaceFlowers = function(flowerbed, n) {
  let vals = [0, 0, undefined, undefined];
  let [insertions, counter, prev, next] = vals;
  
  while (counter < flowerbed.length) {
    if (flowerbed[counter] === 1) { // if element === 1, cannot be planted here nor in next index
      counter += 2;
      continue;
    }
    
    prev = flowerbed[counter - 1];
    next = flowerbed[counter + 1];
    
    if (isAvailable(flowerbed, counter)) { // check if element is 0 and meets criteria
      flowerbed[counter] = 1;
      counter += 2;
      insertions += 1;
      continue;
    }

    counter += 1;
  }

  return insertions >= n; // check if at least as many insertions as n
};

const isAvailable = function(arr, counter) {
  let prev = arr[counter - 1];
  let next = arr[counter + 1];
  
  if (prev === undefined && next === undefined) { // if element is only member of arr
    return arr[counter] === 0;
  }
  
  if (counter === 0) { // if element is first
    return next === 0 && arr[counter] === 0;
  }
  
  if (counter === arr.length - 1) { // if element is last 
    return prev === 0 && arr[counter] === 0;
  }
  
  return prev === 0 && next === 0 && arr[counter] === 0; // if element is adjacent to 0's and is 0 itself
};
