// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/description/

// bit manipulation

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

var checkPrime = function(n) {
    if(n==2) return true;
    if(n==1) return false;
    let isPrime = true;
    for(let i=2; i<n; i++) {
        console.log(n, i);
        if(n % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
var checkBit = function(n, i) {
    return (n>>i) & 1;
}
var countBits = function(num) {
    let count = 0;
    while(num > 0) {
        if((num & 1) == 1) {
            count++;
        }
        num = num >> 1;
    }
    return count;
}

var countPrimeSetBits = function(left, right) {
    let primeCount = 0;
    for(let i=left; i<= right; i++) {
        let bitsCount = countBits(i);
        if(checkPrime(bitsCount)) {
            // console.log(i, bitsCount);
            primeCount++;
        }
    }
    return primeCount;
};

