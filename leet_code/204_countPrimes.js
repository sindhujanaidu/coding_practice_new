// https://leetcode.com/problems/count-primes/description/

/**
 * @param {number} n
 * @return {number}
 */
var is_prime = function(num) {
    if(num <= 1)
        return false
    else if(num <= 3)
        return true
    else if(num % 2 == 0 || num % 3 == 0)
        return false
    i = 5
    while (i * i <= num) {
        if(num % i == 0 || num % (i + 2) == 0)
            return false
        i += 6
    }
    return true
}

var nthPrime = function(n) {
    count = 0
    num = 2
    while (count < n) {
        if (is_prime(num))
            count += 1
        if( count == n)
            return num
        num += 1
    }
}
var countPrimes = function(n) {
    count = 0
    num = 2
    if(n <= 1)
        return 0
    while (num < n) {
        if (is_prime(num)) {
            count += 1;
        }
        num += 1
    }
    return count;
};
