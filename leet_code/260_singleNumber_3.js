// https://leetcode.com/problems/single-number-iii/description/

// bit manipulation

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var checkBit = function (n, i) {
    return (n >> i) & 1;
}
var singleNumber = function(nums) {
    let ans = 0;
    const len = nums.length;
    for(let i=0; i <len; i++) {
        ans = ans ^ nums[i];
    }

    let bitPos = 0;
    for(let i=0; i<32; i++) {
        if(checkBit(ans, i) == 1) {
            bitPos = i;
            break;
        }
    }

    let rep1 = 0, rep2 = 0;
    for(let i=0; i<len; i++) {
        if(checkBit(nums[i], bitPos) == 1) {
            rep1 = rep1 ^ nums[i];
        } else {
            rep2 = rep2 ^ nums[i];
        }
    }
    return [rep1, rep2];
};
