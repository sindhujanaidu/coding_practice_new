// https://leetcode.com/problems/goal-parser-interpretation/description/

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    // SOLUTION 1: brute force
    const len = command.length;
    let sub = '';
    for(let i=0; i<len; i++) {
        const s = command[i];
        if(s != "(" && s != ")") {
            sub += s;
        } else if(s == ")" && command[i-1] == "(") {
            sub += 'o';
        }
    }
    return sub;

    // SOLUTION 2: Inbuilt functions
    return command.replaceAll("()", 'o').replaceAll("(al)", 'al');
};
