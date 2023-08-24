// https://www.interviewbit.com/problems/matrix-search/

// binary search

module.exports = { 
 //param A : array of array of integers
 //param B : integer
 //return an integer
	searchMatrix : function(A, B){
        let ans = 0;
        for(let i=0; i< A.length; i++) {
            const arr = A[i];
            let low = 0, high = arr.length, mid;
            while(low <= high) {
                mid = parseInt((low+high)/2);
                const midVal = arr[mid];
                if(midVal == B) {
                    return 1;
                } else if(midVal < B) {
                    low = mid+1;
                } else {
                    high = mid-1;
                }
            }
        }
        return ans;
	}
};
