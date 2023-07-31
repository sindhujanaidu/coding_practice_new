// https://leetcode.com/problems/single-number-ii/description/
// bit manipulation

/**
 * @param {number[]} nums
 * @return {number}
 */
var checkBit = function(num, bitPos) {
    return (num >> bitPos) & 1;
}
var singleNumber = function(nums) {
    let ans = 0;
    for(let i = 0; i< 32; i++) {
        let count = 0;
        for(let j=0; j<nums.length; j++) {
            if(checkBit(nums[j], i)) {
                count++;
            }
        }
        if(count % 3 != 0) {
            ans = ans | (1<<i);
        }
    }
    return ans;
};
