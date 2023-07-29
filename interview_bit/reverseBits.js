// https://www.interviewbit.com/problems/reverse-bits/

module.exports = { 
	//param A : integer
	//return an integer
	reverse : function(A){
        let num = BigInt(A);
        let reversed = BigInt(0);
        let count = 32;
        const one = BigInt(1);
        while(count > 0) {
            reversed = reversed << one;
            if((num & one) == one) {
                reversed = reversed | one;
            }
            num = num >> one;
            count--;
        }
        return reversed.toString(10);
	}
};
