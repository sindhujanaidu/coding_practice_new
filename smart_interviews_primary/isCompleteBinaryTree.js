// https://www.hackerrank.com/contests/smart-interviews/challenges/si-is-complete-binary-tree


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function checkBit(n, i) {
    return (n>>i) & 1;
}

/*
 * Complete the 'isFullBinaryTree' function below.
 */

var Tree = function() {
    this.root = null;
}

Tree.prototype.insert = function(node, data) {
    if (node == null){
        node = new Node(data);
    }
     else if (data < node.data){
        node.left  = this.insert(node.left, data);
    }
    else{
        node.right = this.insert(node.right, data);   
    }

    return node;
}

var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function isCompleteBinaryTree(root) {
    // Write your code here
    
    // root node is null
    if(root == null) return true;
    
    let queue = []; // create queue
    let flag = false; // flag used to check non full node
    
    // push root to the queue
    queue.push(root);
    while(queue.length != 0) {
        let temp_node = queue.shift();
        
        //if left is not null
        if(temp_node.left != null) {
            //if node is not full and non-empty left node seen (right node might be empty in prev level)
            if(flag) return false;
            queue.push(temp_node.left)
        } else {
            flag = true;
        }
        
        //if right is not null
        if(temp_node.right != null) {
            //if node is not full and non-empty right node seen (left node might be empty in same level)
            if(flag) return false;
            queue.push(temp_node.right)
        } else {
            flag = true;
        }
    }

    // if above conditions are not satisfied then its CBT
    return true;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const n = parseInt(readLine().trim());
        const list = readLine().trim().split(" ").map(Number);
        let tree = new Tree();
        for(let j=0; j<n; j++) {
            tree.root = tree.insert(tree.root, list[j]);
        }
        let ans = isCompleteBinaryTree(tree.root);
        ws.write((ans ? "Yes" : "No") + '\n');
    }
    ws.end();
}
