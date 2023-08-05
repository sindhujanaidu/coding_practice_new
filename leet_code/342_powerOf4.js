// https://leetcode.com/problems/power-of-four/description/

// bit manipulation

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let setCount = 0, evenPos = 0;
    for(let i=0; i< 32; i++) {
        if(((n >> i) & 1) == 1) {
            setCount++;
            if(i%2 == 0) {
                evenPos++;
            }
        }
    }
    return setCount == 1 && evenPos == 1 && n > 0;
};
