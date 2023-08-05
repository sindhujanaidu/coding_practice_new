// https://leetcode.com/problems/hamming-distance/description/

// bit manipulation

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y, count = 0;
    while(xor > 0) {
        if((xor & 1) == 1) {
            count++;
        }
        xor = xor >> 1;
    }
    return count;
};
