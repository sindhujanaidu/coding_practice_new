// https://www.interviewbit.com/problems/allocate-books/

// binary search

module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
    books : function(A, B){
        let ans = -1;
        const Len = A.length;
        const getLowAndHigh = function(arr, len) {
            let max = arr[0], sum = 0;
            for(let i=0; i<len; i++) {
                sum += arr[i];
                if(max < arr[i]) max = arr[i];
            }
            return {low: max, high: sum};
        }
        const valid  = function(arr, len, val, s) {
            let s_req = 0, sum = 0;
            for(let i=0; i<len; i++) {
                sum += arr[i];
                if(sum == val) {
                    s_req++;
                    sum = 0;
                } else if(sum < val) {
                    continue;
                } else {
                    s_req++;
                    sum = arr[i];
                }
            }
            if(sum > 0) s_req++;
            return s_req <=s;
        }
        let { low, high } = getLowAndHigh(A, Len);
        if(B > Len) return ans;
        while(low<=high) {
            mid = parseInt((low+high)/2);
            if(valid(A, Len, mid, B)) {
                ans = mid;
                high = mid-1;
            } else {
                low = mid+1;
            }
        }
        return ans;
    }
}
