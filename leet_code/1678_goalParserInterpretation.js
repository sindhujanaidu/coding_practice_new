// https://leetcode.com/problems/goal-parser-interpretation/description/

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    // let str = '';
    // let arr = command.split("");
    // for(let s of arr) {
    //     // console.log(s)
    //     if(s == "()") {
    //         if(s == "(al)") {
    //         str += "o";
    //     } else if(s == "(al)") {
    //         str += "al";
    //     } else {
    //         str += s;
    //     }
    // }
    // const len = acommand.length;
    // const sub = '';
    // for(let i=0; i<len; i++) {
    //     const s = command[i];
    //     if(s == "(") {
    //         sub += "("
    //     }
    // }
    return command.replaceAll("()", 'o').replaceAll("(al)", 'al');
};
