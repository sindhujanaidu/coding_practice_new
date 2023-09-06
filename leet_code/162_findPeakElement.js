// https://leetcode.com/problems/find-peak-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const len = nums.length;
    let low = 0, high = len - 1;
    let maxInd = 0, max = nums[0];
    
    while(low <= high) {
        mid = parseInt((low+high)/2);
        if(nums[low] <= nums[high]) {
            if(nums[high] >= max) {
                max = nums[high];
                maxInd = high;
            }
            low++;
        } else {
            if(nums[low] >= max) {
                max = nums[low];
                maxInd = low;
            }
            high--;
        }
    }

    return maxInd;
};
