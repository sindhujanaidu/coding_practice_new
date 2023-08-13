// https://leetcode.com/problems/excel-sheet-column-number/description/

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(str) {
    if(str.length == 1) {
        const res = str.charCodeAt(0);
        return res-64;
    } else {
        let sol =0;
        while(str.length >= 1) {
            const res = str.charCodeAt(0);
            sol = (sol * 26) +res - 64;
            str = str.substring(1)
        }
        return sol;
    }
};
