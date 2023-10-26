// https://leetcode.com/problems/evaluate-boolean-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
    // let curr = root;   
    if(!root) return null;
    // Case 1: root checking done,and if theres no children//
    if(!root.left && !root.right)
        return root.val ;
    //Case 2: othercase, since its full so its gonna have 2 children//
    if(root.left && root.right){
        const leftValue = evaluateTree(root.left);
        const rightValue = evaluateTree(root.right);
        switch(root.val){
            case 2:
                return leftValue || rightValue;
            case 3:
                return leftValue && rightValue;
        }
    }

    return null; 
};
