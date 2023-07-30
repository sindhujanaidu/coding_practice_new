// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // TC: O(n^2)
    let profit = 0;
    for(let i=0; i<prices.length; i++) {
        for(let j=i+1; j<prices.length; j++) {
            if((prices[j] > prices[i]) && (profit < prices[j] - prices[i])) {
                profit = prices[j] - prices[i];
            }
        };
    };
    return profit;


    // using dict?
    // let dict = {};
    // for(let i=0; i<prices.length; i++) {
    //     dict[i] = prices[i];
    // };
};
