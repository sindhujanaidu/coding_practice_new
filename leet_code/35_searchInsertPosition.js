// https://leetcode.com/problems/search-insert-position/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const len = nums.length;
    let low = 0, high = len - 1, mid, ans = 0;
    
    while(low <= high) {
        mid = parseInt((low+high)/2);

        if(target == nums[mid]) {
            return mid;
        } 
        
        if(target < nums[mid]) {
            high = mid-1;
        } else {
            ans = mid+1;
            low = mid+1;
        }
    }

    return ans;
};
