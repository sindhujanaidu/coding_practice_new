// https://leetcode.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [], top = -1;
    if(s.length == 1) return false;
    for(let i = 0; i < s.length; i++) {
        if((s[i] == "(") || (s[i] == "{") || (s[i] == "[")) {
            top++;
            stack.push(s[i]);
        }

        if(s[i] == ")") {
            if(stack[top] == "(") {
                top--;
                stack.pop()
            } else {
                return false;
            }
        } else if(s[i] == "}") {
            if(stack[top] == "{") {
                top--;
                stack.pop()
            } else {
                return false;
            }
        } else if(s[i] == "]") {
            if(stack[top] == "[") {
                top--;
                stack.pop()
            } else {
                return false;
            }
        }
    }
    // console.log(stack)
    return (stack.length == 0);
};
