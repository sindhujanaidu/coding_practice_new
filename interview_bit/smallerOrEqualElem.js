// https://www.interviewbit.com/problems/smaller-or-equal-elements/

// binary search

module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	solve : function(A, B){
        let count=-1;
        let low=0, high=A.length-1, mid;
        while(low<=high) {
            mid = parseInt((low+high)/2);
            if(A[mid] > B) {
                high = mid-1;
            } else if(A[mid] == B) {
               count = mid;
               low = mid+1;
            } else {
                count = mid;
                low = mid+1;
            }
        }
        return count != -1?count+1:0;
	}
};
