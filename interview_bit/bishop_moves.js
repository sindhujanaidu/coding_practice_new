// https://www.interviewbit.com/problems/total-moves-for-bishop/
module.exports = { 
 //param A : integer
 //param B : integer
 //return an integer
	solve : function(A, B){
        const col_left = B - 1;
        const col_right = 8 - B;
        const row_up = A - 1;
        const row_down = 8 - A;
        const min = Math.min;
        const ans = min(col_left, row_up) + min(col_left, row_down) + min(col_right, row_up) + min(col_right, row_down);
        return ans;
	}
};
