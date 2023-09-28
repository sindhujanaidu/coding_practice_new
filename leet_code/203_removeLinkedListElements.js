// https://leetcode.com/problems/remove-linked-list-elements/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    let temp = head;
    while(head != null && head.next != null) {
        if(head.next.val == val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }
    if(temp != null && temp.val == val) {
        return temp.next;
    }
    return temp;
};
