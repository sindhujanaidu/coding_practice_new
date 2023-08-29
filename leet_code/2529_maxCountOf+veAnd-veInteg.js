// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
function NegCount(nums) {
    if(nums[0] >= 0 ) return 0;
    let left = 0, right = nums.length - 1;
    while (left < right) {
      let mid = Math.ceil((left + right) / 2);
      if (nums[mid] < 0) left = mid;
      else right = mid - 1;
    }
    return left + 1;
}

function PosCount(nums) {
    if(nums[nums.length - 1] <= 0) return 0
    let left = 0, right = nums.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > 0) right = mid;
      else left = mid + 1;
    }
    return nums.length - left;
}

var maximumCount = function(nums) {
    return Math.max(NegCount(nums), PosCount(nums))
};
