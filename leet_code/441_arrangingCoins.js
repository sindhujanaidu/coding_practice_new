// https://leetcode.com/problems/arranging-coins/description/

// binary search

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let start = 1, end = n, completedRows=0;
    while(start <= end) {
        let mid = parseInt((start+end)/2);
        let sum = (mid * (mid+1))/2;
        if(sum == n) return mid;
        else if(sum < n) {
            completedRows = mid;
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    return completedRows;
};
