// https://www.interviewbit.com/problems/remove-duplicates-from-sorted-list-ii/

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //return the head node in the linked list
	deleteDuplicates : function(head){
        if(head == null || head.next == null) return head;
        let fake = new Node(0);
        fake.next = head;
        let curr = fake;
        while(curr.next != null && curr.next.next != null) {
            if(curr.next.data == curr.next.next.data) {
                let dup = curr.next.data;
                while(curr.next != null && curr.next.data == dup) {
                    curr.next = curr.next.next;
                }
            } else {
                curr = curr.next;
            }
        }
        return fake.next;
	}
};
