// https://leetcode.com/problems/power-of-three/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // console.log("2 power 31 ", 2**(31)) //2147483648
    // console.log("3 power 20 ", 3**(20)) //3486784401
    // console.log("3 power 19 ", 3**(19)) //1162261467
    return (n>0 && 1162261467%n == 0);
};
