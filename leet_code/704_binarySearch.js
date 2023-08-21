// https://leetcode.com/problems/binary-search/description/

// binary search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length - 1, mid;
    while(low <= high) {
        mid = parseInt((low+high)/2);
        if(target == nums[mid]) return mid;
        if(nums[mid] < target)
            low = mid + 1;
        else high = mid - 1;
    }
    return -1;
};
