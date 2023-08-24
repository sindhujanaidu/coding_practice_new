// https://www.interviewbit.com/problems/painters-partition-problem/

// binary search

module.exports = { 
 //param A : integer
 //param B : integer
 //param C : array of integers
 //return an integer
	paint : function(A, B, C){
        const getHighAndLow = function(arr, len) {
            let sum = 0, max = arr[0];
            for(let i=0; i<len; i++) {
                sum += arr[i];
                if(max < arr[i]) max= arr[i];
            }
            return {low: max, high: sum};
        }
        const valid= function(arr, len, val, k) {
            let sum = 0, k_req = 0;
            for(let i=0; i<len; i++) {
                sum += arr[i];
                if(sum == val) {
                    k_req++;
                    sum = 0;
                } else if(sum < val) {
                    continue;
                } else {
                    k_req++;
                    sum = arr[i];
                }
            }
            if(sum > 0) k_req++;
            return  k_req <= k;
        }
        const mod = 10000003;
        const len = C.length;
        let mid;
        let {low, high} = getHighAndLow(C, len);
        while(low <= high) {
            mid = parseInt((low+high)/2);
            if(valid(C, len, mid, A)) {
                ans = mid % mod;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return (ans * B) % mod;
	}
};
