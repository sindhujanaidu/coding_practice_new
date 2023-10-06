// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let arr = [];
var preOrderRec = function(root) {
    // Write your code here
    if(root == null) return;// 1
    arr.push(root.val)// 3
    preOrderRec(root.left);// 2
    preOrderRec(root.right);// 4
};
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    arr = [];
    preOrderRec(root);
    return arr;
};
