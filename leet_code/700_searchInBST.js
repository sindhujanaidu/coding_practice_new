// https://leetcode.com/problems/search-in-a-binary-search-tree/description/

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // --- pure recursion
    // if(root == null) return null
    // if(root.val == val) return root;
    // if(val < root.val) return searchBST(root.left, val);
    // if(val > root.val) return searchBST(root.right, val);

    // --- iterative
    // while(root !== null && root.val !== val){
    //     root = val < root.val ? root.left : root.right;
    // }
    // return root;

    // --- recursion with helper
    let res = null;
    const helper = (node) => {
        if(node == null) return;
        if(node.val == val) {
            res = node;
            return
        }
        if(val < node.val) helper(node.left);
        else helper(node.right)
    }
    helper(root);
    return res;
};
