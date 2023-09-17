/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSetBits = function(n) {
    let count = 0;
    while(n>0) {
        if((n&1) == 1) count++;
        n = n>>1;
    }
    return count;
}
var sumIndicesWithKSetBits = function(nums, k) {
    let len = nums.length;
    let sum = 0;
    for(let i=0; i<len; i++) {
        let count = countSetBits(i);
        console.log(count)
        if(count == k) sum += nums[i];
    }
    return sum;
};
