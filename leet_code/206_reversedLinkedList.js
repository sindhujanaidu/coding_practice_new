// https://leetcode.com/problems/reverse-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
var reverseList = function(head) {
    // sol 1
    let c = head;
    if(head == null) return head;
    let rev;
    while(c != null) {
        if(rev == null) {
            rev = new ListNode(c.val);
        } else {
            rev = new ListNode(c.val, rev);
        }
        c = c.next;
    }
    return rev;

  // sol 2
  let rev = null;
  let current = head;
  while(current != null) {
     let future = current.next;
     current.next = rev;
     rev = current;
     current = future;
  }
  return rev;
};
