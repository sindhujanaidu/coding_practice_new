// https://leetcode.com/problems/missing-number/description/

// bit manipulation

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missingNum = 0;
    let len = nums.length;
    for(let i=0; i<len; i++) {
        missingNum = missingNum ^ nums[i] ^ (i+1);
    }
    return missingNum;
};
