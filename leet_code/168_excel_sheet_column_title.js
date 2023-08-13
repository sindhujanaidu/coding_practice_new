// https://leetcode.com/problems/excel-sheet-column-title/description/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    if(columnNumber == 1) {
        const res = String.fromCharCode(64+columnNumber);
        return res;
    } else {
        let res = '';
        while(columnNumber >26) {
            let x = (columnNumber % 26);
            x == 0 ? x = 26 : 0;
            res += String.fromCharCode(64+x);
            columnNumber = (columnNumber - x) / 26;
        }
        res += String.fromCharCode(64+columnNumber);
        return res.split("").reverse().join("");
    }
};
