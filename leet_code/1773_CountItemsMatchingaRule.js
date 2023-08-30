// https://leetcode.com/problems/count-items-matching-a-rule/description/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let c = 0;
    for(let item of items) {
        if(ruleKey == 'type') {
            if(item[0]== ruleValue) c++;
        } else if(ruleKey == 'color') {
            if(item[1]== ruleValue) c++;
        } else {
            if(item[2]== ruleValue) c++;
        }
    }
    return c;
};
