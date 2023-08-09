// https://leetcode.com/problems/binary-number-with-alternating-bits/description/

// bit manipulation

/**
 * @param {number} n
 * @return {boolean}
 */

var hasAlternatingBits = function(num) {
    let ans = true;
    while(num > 0) {
        let first = num & 1;
        let second = (num >> 1) & 1;
        if(first == second) {
            ans = false;
            break;
        }
        num = num >> 1;
    }
    return ans;
};
