// https://leetcode.com/problems/merge-two-sorted-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(-1);
    let temp = head;
    while(l1!=null && l2!=null) {
        if(l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    while(l1!=null) {
        head.next = l1;
        head = head.next;
        l1 = l1.next;
    }
    while(l2!=null) {
        head.next = l2;
        head = head.next;
        l2 = l2.next;
    }
    return temp.next;
};
