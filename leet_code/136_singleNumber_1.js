// https://leetcode.com/problems/single-number/description/

// bit manipulation

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xorOfNums = 0;
    for(let num of nums) {
        xorOfNums = xorOfNums ^ num;
    }
    return xorOfNums;
};
