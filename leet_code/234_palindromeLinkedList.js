// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseLL = function(head) {
    // let prev = null;
    // let curr = h;
    // while(curr != null) {
    //     let fut = curr.next;
    //     curr.next = prev;
    //     prev = curr;
    //     curr = fut;
    // }
    // return prev;
    
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
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let tempH = head;
    let rev = reverseLL(tempH);
    while(rev != null) {
        if(rev.val != tempH.val) {
            return false;
        }
        rev = rev.next;
        tempH = tempH.next;
    }
    return true;
};
