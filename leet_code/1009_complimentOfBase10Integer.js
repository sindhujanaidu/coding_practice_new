// https://leetcode.com/problems/complement-of-base-10-integer/submissions/

// bit manipulation

/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let ans = 0;
    let set = 1;
    while(n>0) {
        if((n&1) == 0) {
            ans = ans | set;
        }
        set = set << 1;
        n = n >> 1;
    }
    return (n == 0) ? 1 : ans;
};
