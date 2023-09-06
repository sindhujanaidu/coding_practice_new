// https://leetcode.com/problems/minimum-size-subarray-sum/description/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const len = nums.length;
    let ans = Number.MAX_SAFE_INTEGER;
    let l = 0, r = 0, sum = 0;
    while(r<len) {
        sum += nums[r];

        while(sum>=target) {
            ans = Math.min(ans, r-l+1);
            sum -= nums[l]
            l++;
        }
        r++;
    }
    return ans == Number.MAX_SAFE_INTEGER ? 0 : ans;
};
