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
    // sol 1 - brute force
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

    //sol 2
    let c1 = head, c2 = head.next;
    if(c2 == null) return head;
    while(c1 != null && c2.next != null && c2.next.next != null) {
        c1 = c1.next;
        c2 = c2.next.next;
    }
    if(c2.next == null || c2.next.next == null)
        c1 = c1.next;
    return c1;
    
    //sol 3
    let fast = slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
