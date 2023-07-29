// https://www.interviewbit.com/problems/trailing-zeroes/

module.exports = { 
 //param A : integer
 //return an integer
	solve : function(num){
        // let A = num;//.toString(2);
        let count = 0;
        while(num > 0) {
            if((num & 1) == 0) {
                count++;
            } else {
                break;
            }
            num = num >> 1;
        }
        return count;
	}
};
