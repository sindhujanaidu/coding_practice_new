// https://leetcode.com/problems/number-complement/description/

// bit manipulation

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let ans = 0;
    let set = 1;
    while(num > 0) {
        if((num & 1) == 0) {
            ans = ans | set;
        }
        set = set << 1;
        num = num >> 1;
    }
    return ans;
};
