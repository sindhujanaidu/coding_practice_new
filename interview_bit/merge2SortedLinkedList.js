// https://www.interviewbit.com/problems/merge-two-sorted-lists/

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //param B : head node of linked list
 //return the head node in the linked list
	mergeTwoLists : function(l1, l2){
        let head = new Node(-1);
        let temp = head;
        while(l1 != null && l2 != null) {
            if(l1.data < l2.data) {
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
	}
};
