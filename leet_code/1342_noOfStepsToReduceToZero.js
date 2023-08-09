// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/

// bit manipulation

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0;
    while(num > 0) {
        if((num & 1) == 1) {
            num = num - 1;
        } else {
            num = num >> 1;
        }
        count++;
    }
    return count;
};
