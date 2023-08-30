// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    for(let item of sentences) {
        const words = item.split(" ");
        const len = words.length;
        if(len > max) max = len;
    }
    return max;
};
