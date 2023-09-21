// https://leetcode.com/problems/middle-of-the-linked-list/description/

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
var middleNode = function(head) {
    // sol 1
    let c = head, size = 0;
    while(c != null) {
        c = c.next;
        size++;
    }
    let half = parseInt(size/2);
    c = head;
    let cnt = 0;
    while(c != null && cnt < half) {
        c = c.next;
        cnt++;
    }
    return c;
};
