// https://www.interviewbit.com/problems/add-two-numbers-as-lists/

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //param B : head node of linked list
 //return the head node in the linked list
	addTwoNumbers : function(h1, h2){
        let h = h1, c = 0;
        let temp = h;
        while(h1 != null && h2 != null) {
            s = h1.data + h2.data + c;
            c = 0;
            if(s > 9) c = 1;
            h1.data = s%10;
            temp = h1;
            h1 = h1.next;
            h2 = h2.next;
        }

        while(h1 != null) {
            s = h1.data + c;
            c = 0;
            if(s > 9) c = 1;
            h1.data = s%10;
            temp = h1;
            h1 = h1.next;
        }

        while(h2 != null) {
            s = h2.data + c;
            c = 0;
            if(s > 9) c = 1;
            h2.data = s%10;
            temp.next = h2;
            temp = temp.next;
            h2 = h2.next;
        }
        if(c == 1) {
            temp.next = new Node(c)
            temp = temp.next;
        }
        return h;
	}
};
