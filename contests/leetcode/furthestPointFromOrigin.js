2833. Furthest Point From Origin
User Accepted:15455
User Tried:17166
Total Accepted:15929
Total Submissions:28825
Difficulty:Easy
You are given a string moves of length n consisting only of characters 'L', 'R', and '_'. The string represents your movement on a number line starting from the origin 0.

In the ith move, you can choose one of the following directions:

move to the left if moves[i] = 'L' or moves[i] = '_'
move to the right if moves[i] = 'R' or moves[i] = '_'
Return the distance from the origin of the furthest point you can get to after n moves.

 

Example 1:

Input: moves = "L_RL__R"
Output: 3
Explanation: The furthest point we can reach from the origin 0 is point -3 through the following sequence of moves "LLRLLLR".
Example 2:

Input: moves = "_R__LL_"
Output: 5
Explanation: The furthest point we can reach from the origin 0 is point -5 through the following sequence of moves "LRLLLLL".
Example 3:

Input: moves = "_______"
Output: 7
Explanation: The furthest point we can reach from the origin 0 is point 7 through the following sequence of moves "RRRRRRR".
 

Constraints:

1 <= moves.length == n <= 50
moves consists only of characters 'L', 'R' and '_'.

JavaScript	
/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    const len = moves.length;
    let count = 0, lCount = 0, rCount = 0;
    for(let i=0; i<len; i++) {
        if(moves[i] == "_") {
            count++;
        }
        if(moves[i] == "L") {
            lCount++;
        }
        if(moves[i] == "R") {
            rCount++;
        }
    }
    return lCount > rCount ? count+lCount-rCount : count+rCount-lCount;
};
1
/**
2
 * @param {string} moves
3
 * @return {number}
4
 */
5
var furthestDistanceFromOrigin = function(moves) {
6
    const len = moves.length;
7
    let count = 0, lCount = 0, rCount = 0;
8
    for(let i=0; i<len; i++) {
9
        if(moves[i] == "_") {
10
            count++;
11
        }
12
        if(moves[i] == "L") {
13
            lCount++;
14
        }
15
        if(moves[i] == "R") {
16
            rCount++;
17
        }
18
    }
19
    return lCount > rCount ? count+lCount-rCount : count+rCount-lCount;
20
};
