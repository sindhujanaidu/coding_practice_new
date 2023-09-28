// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

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
var deleteDuplicates = function(head) {
    // sol 1 - referred
    if(!head) return null;
    let current = head.next;
    let prev = head;

    while(prev) {
        if(current === null) return head;
        if(prev.val === current.val) {
            prev.next = current.next;
        } else { 
            prev = current;
        }
        current = current.next
    }
    return prev;

    // sol 2
    let temp = head;
    while(temp != null && temp.next != null) {
        if(temp.val == temp.next.val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return head;
};
