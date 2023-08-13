// https://leetcode.com/problems/max-consecutive-ones/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0, max = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i]== 1) {
            count++;
            max = count > max ? count : max;
        } else {
            count = 0;
        }
    }
    return max;
};
