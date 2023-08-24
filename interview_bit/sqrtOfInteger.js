// https://www.interviewbit.com/problems/square-root-of-integer/

// binary search

module.exports = { 
 //param A : integer
 //return an integer
	sqrt : function(A){
        let low = 1, high=A, mid, ans=0;
        while(low<=high) {
            mid=parseInt((low+high)/2);
            const sqr = mid*mid;
            if(sqr == A) {
                return mid;
            } else if(sqr < A) {
                ans=parseInt(mid);
                low=mid+1;
            } else {
                high=mid-1;
            }
        }
        return ans;
	}
};
