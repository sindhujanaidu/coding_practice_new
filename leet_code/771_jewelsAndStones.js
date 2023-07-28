// https://leetcode.com/problems/jewels-and-stones/description/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelsArr = jewels.split('');
    const stonesArr = stones.split('');
    let count = 0;
    for(let i of stonesArr) {
        for(let j of jewelsArr) {
            if(i == j)
                count++;
        }
    }
    return count;
};
