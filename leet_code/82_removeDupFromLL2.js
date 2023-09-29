// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/

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
    if(head == null && head.next == null) return head;
    let fake = new ListNode(0);
    fake.next = head;
    let curr = fake;
    while(curr.next != null && curr.next.next != null) {
        if(curr.next.val == curr.next.next.val) {
            let dup = curr.next.val;
            while(curr.next != null && curr.next.val == dup) {
                curr.next = curr.next.next;
            }
        } else {
            curr = curr.next;
        }
    }
    return fake.next;
};
