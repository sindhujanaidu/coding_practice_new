//https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    // sol 2 - without saving head 
    let s = "";
    let current = head;
    while(current != null) {
        s += current.val;
        current = current.next;
    }
    return parseInt(s, 2);

    // sol 1 - with saving head
    let s = String(head.val);
    let current = head;
    while(current.next) {
        current = current.next;
        s += current.val;
    }
    return parseInt(s, 2);
};
