// https://leetcode.com/problems/power-of-two/description/

// bit manipulation

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let count = 0;
    for(let i=0; i< 32; i++) {
        if(((n >> i) & 1) == 1) {
            count++;
        }
    }
    return count==1 & n > 0;
};
