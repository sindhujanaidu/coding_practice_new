// https://leetcode.com/problems/set-mismatch/

// bit manipulation

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var checkBit = function(n, i) {
    return ((n >> i) & 1) == 1;
}
var findErrorNums = function(nums) {
    const len = nums.length;
    let ans = 0;
    for(let i=0; i<len; i++) {
        ans = ans ^ nums[i] ^ (i+1);
    }

    let bitPos = 0;
    for(let i=0; i<31; i++) {
        if(checkBit(ans,i)) {
            bitPos = i;
            break;
        }
    }
    let p = 0, q = 0;
    for(let i=0; i<len; i++) {
        if(checkBit(nums[i], bitPos)) {
            p = p ^ nums[i];
        } else {
            q = q ^ nums[i];
        }

        if(checkBit(i+1, bitPos)) {
            p = p ^ (i+1);
        } else {
            q = q ^ (i+1);
        }
    }

    for(let i=0; i<len; i++) {
        if(nums[i] == p) {
            return [p, q];
        }
    }
    return [q, p];
};
