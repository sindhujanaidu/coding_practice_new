// https://leetcode.com/problems/remove-outermost-parentheses/description/

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    // let openCount = 0;
    // let output = "";
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === "(") {
    //         if (openCount) output += s[i];
    //         openCount++;
    //     }
    //     else if (s[i] === ")") {
    //         openCount--;
    //         if (openCount) output += s[i];
    //     }
    // }
    // return output;

    // let output = '';
    // let outerMostOpen = false;
    // let stack = [];
    // for (let para of s) {
    //     if (para === '(' && !outerMostOpen)
    //         outerMostOpen = true;
    //     else if (para === '(' && outerMostOpen) {
    //         stack.push(')');
    //         output += para
    //     } else if (para === ')' && stack.length)
    //         output += stack.pop()
    //     else if (para === ')' && ! stack.length)
    //         outerMostOpen = false;
    // }
    // return output;

    let parenthesCount = 0;
    let result = "";
    
    for (const letter of s) {
        if (letter === "(") {
            if (parenthesCount) {
                result += letter;
            }
            parenthesCount++;
        } else {
            parenthesCount--;
            if (parenthesCount) {
                result += letter;
            }
        }
    }
    
    return result;
};
