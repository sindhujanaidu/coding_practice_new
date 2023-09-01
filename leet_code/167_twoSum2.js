// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// 2 pointers

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const len = nums.length;
    let p1 = 0, p2 = len-1;
    while(p1<p2) {
        if(target < nums[p1]+nums[p2]) {
            p2--;
        } else if(target > nums[p1]+nums[p2]) {
            p1++;
        } else {
            break;
        }
    }
    return [p1+1, p2+1];
};
