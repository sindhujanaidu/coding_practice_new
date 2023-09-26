// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// var rev = function(h) {
//     let current = h;
//     let rev = null;
//     while(current != null) {
//         let future = current.next;
//         current.next = rev;
//         rev = current;
//         current = future;
//     }
//     return rev;
// }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let h1 = l1, h2 = l2, c = 0;
    let n = new ListNode(-1);
    temp = n;
    while(h1 != null && h2 != null) {
        s = h1.val + h2.val + c;
        c = 0;
        if(s > 9) c = 1;
        n.next = new ListNode(s%10)
        n = n.next;
        h1 = h1.next;
        h2 = h2.next;
    }

    while(h1 != null) {
        s = h1.val + c;
        c = 0;
        if(s > 9) c = 1;
        n.next = new ListNode(s%10)
        n = n.next;
        h1 = h1.next;
    }

    while(h2 != null) {
        s = h2.val + c;
        c = 0;
        if(s > 9) c = 1;
        n.next = new ListNode(s%10)
        n = n.next;
        h2 = h2.next;
    }
    if(c == 1) {
        n.next = new ListNode(c)
        n = n.next;
    }
    return temp.next;
};
