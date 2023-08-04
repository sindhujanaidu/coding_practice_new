// https://leetcode.com/problems/reverse-bits/description/

// bit manipulation

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var zero = BigInt(0);
var one = BigInt(1);
var max = BigInt(32);
var reverseBits = function(num) {
    let ans = zero;
    let n = BigInt(num)
    for(let i=zero; i< max; i++) {
        if(((n >> i) & one) == one) {
            ans = (ans << one) | one;
        } else {
            ans = ans << one;
        }
    }
    return BigInt.asUintN(64, ans);
};
