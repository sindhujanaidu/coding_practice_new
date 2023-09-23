// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

/**
 * @param {string} s
 * @return {number}
 */

// sol 1: using count
var maxDepth = function(s) {
    let maxCount = 0, openCount = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] == "(") {
            maxCount = Math.max(maxCount, ++openCount);
        } else if(s[i] == ")") {
            openCount--;
        }
    }
    return maxCount;
};

// sol 2: using stack
var maxDepth = function(s) {
    let max = 0, stack = [];
    for(let char of s) {
        if(char == "(") {
            stack.push(char)
            max = Math.max(stack.length, max);
        } else if(char == ")") {
            stack.pop()
        }
    }
    return max;
};
