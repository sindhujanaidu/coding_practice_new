// https://leetcode.com/problems/valid-perfect-square/description/

// Binary search

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let low = 1, high = num, mid, ans;
    while(low<=high) {
        mid = parseInt((low+high)/2);
        if(mid*mid == num) return true;
        if(mid*mid < num) {
            low = mid+1;
        } else {
            high = mid-1;
        }
        ans = mid;
    }
    return false;
};
