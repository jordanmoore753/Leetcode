/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = function(root, sum) {
  if (!root) {
    return 0;
  }
  
  let count = [];
  let queue = [[root]];
  let current;
  let next;
  let total;
  
  while(queue.length > 0) {
    current = queue.shift();
    next = [];
    
    current.forEach(function(node) {
      total = 0;
      recurse(node, sum, total, count);
      
      if (node.left) {
        next.push(node.left);
      }

      if (node.right) {
        next.push(node.right);
      }
    });
    
    if (next.length > 0) {
      queue.push(next);  
    }
  }
  
  return count.length;
};

const recurse = function(node, sum, total, count) {
  if (!node) {
    return count;
  }
  
  total += node.val;
  
  if (sum === total) {
    count.push(1);
  }
  
  recurse(node.left, sum, total, count);
  recurse(node.right, sum, total, count);
};