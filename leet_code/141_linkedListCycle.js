// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // sol 1 - using hashset
    let set = new Set();
    while(head != null) {
        if(set.has(head)) {
            return true;
        } else {
            set.add(head);
        }
        head = head.next;
    }
    return false

    // sol 2 - using slow fast approach
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            // let ptr = head;
            // while (ptr !== slow) {
            //     ptr = ptr.next;
            //     slow = slow.next;
            // }
            // return ptr;
            return true
        }
    }
    return false;
};
