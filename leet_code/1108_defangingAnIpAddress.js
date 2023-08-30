// https://leetcode.com/problems/defanging-an-ip-address/description/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let str = ''
    for(let item of address) {
        if(item == ".") str += "[.]";
        else str += item;
    }
    return str;
};
