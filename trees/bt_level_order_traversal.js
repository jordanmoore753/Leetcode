/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  if (!root) { return []; }
  
  let queue = [[root]];
  let currentPair;
  let nextPair;
  let currentShift;
  let results = [];
  
  while (queue.length > 0) {
    currentPair = queue.shift();
    currentShift = [];
    nextPair = [];
    
    currentPair.forEach(function(node) {
      if (node !== null) {
        currentShift.push(node.val);
        
        if (node.left !== null) {
          nextPair.push(node.left);
        }
        
        if (node.right !== null) {
          nextPair.push(node.right);
        }
      }
    });
    
    if (nextPair.length > 0) {
      queue.push(nextPair);    
    }
    
    results.push(currentShift);
  }
  
  return results;
};