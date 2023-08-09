// https://leetcode.com/problems/binary-gap/description/

// bit manipulation

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let lastSetInd = 0, diff=0, ind=0, setCount = 0;
    while(n>0) {
        let first = n & 1;
        if(first == 1) {
            diff = (ind - lastSetInd > diff && setCount > 0) ? ind - lastSetInd : diff;
            setCount++;
            lastSetInd = ind;
        }
        ind++;
        n = n >> 1;
    }
    console.log(diff)
    return diff;
};
