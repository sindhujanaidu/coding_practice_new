// https://leetcode.com/problems/counting-bits/description/

// bit manipulation

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let countArr = [];
    for(let i=0; i<=n; i++) {
        countArr[i] = 0;
        for(let j=0; j<31; j++) {
            countArr[i] += ((i>>j)&1)==1;
        }
    }
    return countArr;
};
