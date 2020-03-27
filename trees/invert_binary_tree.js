/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
  if (!root) {
    return null;
  }
  
  let left = root.left;
  let right = root.right;
  
  root.left = right;
  root.right = left;
  
  invertTree(root.left);
  invertTree(root.right);
  return root;
};