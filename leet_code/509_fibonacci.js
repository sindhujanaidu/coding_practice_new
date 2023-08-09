// https://leetcode.com/problems/fibonacci-number/description/

//recursion

/**
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
    if(n == 0) {
        return 0;
    } else if(n == 1 || n == 2) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
};

// solution 2 using dict
/**
 * @param {number} n
 * @return {number}
 */
var fibonacci = function(n, obj) {
    if(n == 0) {
        obj["0"] = 0;
        return 0;
    } else if(n == 1 || n == 2) {
        obj["1"] = 1;
        obj["2"] = 1;
        return 1;
    } else {
        if(obj[n]) return obj[n];
        x = fibonacci(n-1, obj) + fibonacci(n-2, obj);
        obj[n] = x;
        return x;
    }
}
var fib = function(n) {
    return fibonacci(n, {});
};
