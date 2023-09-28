// https://www.interviewbit.com/problems/remove-duplicates-from-sorted-list/

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //return the head node in the linked list
	deleteDuplicates : function(head){
        if(!head) return null;
        let current = head.next;
        let prev = head;

        while(prev) {
            if(current === null) return head;
            if(prev.data === current.data) {
                prev.next = current.next;
            } else { 
                prev = current;
            }
            current = current.next
        }
        return prev;
	}
};
