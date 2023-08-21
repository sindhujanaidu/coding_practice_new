// https://leetcode.com/problems/sqrtx/description/

// binary search

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 1, high = x, mid, ans = 0;
    while(low <= high) {
        mid = parseInt((low+high)/2);
        if(mid * mid == x)
            return mid;
        if(mid * mid < x) {
            ans = mid;
            low = mid+1;
        } else {
           high = mid-1; 
        }
    }
    return ans;
};
