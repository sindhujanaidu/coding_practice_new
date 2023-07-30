// https://www.interviewbit.com/problems/single-number-ii/

// bit manipulation

module.exports = { 
 //param A : array of integers
 //return an integer
	singleNumber : function(Arr){
        let ans = 0;
        
        const checkBit= function (n, i) {
            return n>>i & 1;
        };
        for(let i=0; i< 32; i++) {
            let count = 0;
            for(let j=0; j< Arr.length; j++) {
                if(checkBit(Arr[j], i)) {
                    count++;
                }
            }
            if(count % 3 != 0) {
                ans = ans + (1<<i);
            }
        }
        return ans;
	}
};
