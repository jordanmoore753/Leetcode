// first attempt, 352 ms

/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = function(T) {
  if (T.length <= 1) {
    return [0];
  }
  
  let counter = 0;
  let queue = [];
  let results = [];
  let max = Math.max(...T);

  queue.push(T.shift());
  
  while (queue.length > 0) {
    if (T[counter] === undefined || max === queue[0]) {
      queue.shift();
      results.push(0);
      
      if (T.length > 0) {
        queue.push(T.shift());
      }
      
      counter = 0;
      continue;
    }
    
    if (T[counter] > queue[0]) {
      queue.shift();
      results.push(counter + 1);
      
      if (T.length > 0) {
        queue.push(T.shift());
      }
      
      counter = 0;
      continue;
    }
    

    counter += 1;
  }
  
  return results;
};

// second solution

/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = function(T) {
  if (T.length <= 1) {
    return [0];
  }
  
  let results = Array.from({length: T.length}, (x) => 0);
  let stack = [];
  
  T.forEach(function(temp, i) {
    while (stack[stack.length - 1] !== undefined && T[stack[stack.length - 1]] < temp) {
      results[stack[stack.length - 1]] = i - stack[stack.length - 1];
      stack.pop();
    }
    
    stack.push(i);
  });
  
  return results;
};