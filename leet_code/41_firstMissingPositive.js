// https://leetcode.com/problems/first-missing-positive/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let  map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], 1);
    }
    for (let i = 1; i < nums.length+2; i++) {
        if (map.get(i)) continue;
        else return i;
    }
};
