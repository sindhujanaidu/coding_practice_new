// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let ans = 0;
    for(let item of operations) {
        // console.log(item)
        if(item.indexOf('--') >= 0) {
            ans = ans - 1;
        } else if(item.indexOf('++') >= 0) {
            ans = ans + 1;
        }
    }
    return ans;
};
