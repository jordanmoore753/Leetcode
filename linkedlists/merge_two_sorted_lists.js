/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const mergeTwoLists = function(l1, l2) {
  const reAssign = function(node, list1, list2) {
    let usedFirst = false;
    
    if (!list1 && !list2) {
      return;
    }
  
    head = node;

    if (list1 && list2) {
      if (list1.val <= list2.val) {
        head.val = list1.val;
        usedFirst = true;
      } else {
        head.val = list2.val;
        usedFirst = false;
      }
      
      head.next = new ListNode(null);
      return usedFirst ? reAssign(node.next, list1.next, list2) : reAssign(node.next, list1, list2.next);
    } else if (!list1) {
      head.val = list2.val;
      
      if (list2.next) {
        head.next = new ListNode(null);
        return reAssign(node.next, list1, list2.next);
      } 
      
      return;
    } else if (!list2) {
      head.val = list1.val;
      
      if (list1.next) {
        head.next = new ListNode(null);
        return reAssign(node.next, list1.next, list2);  
      }
      
      return;
    }
  };
  
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }
  
  let n = new ListNode(null);
  reAssign(n, l1, l2);
  return n;
};