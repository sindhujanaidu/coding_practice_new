// https://www.hackerrank.com/contests/smart-interviews/challenges/si-height-of-tree


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
 * Complete the 'sumOfAndOfSubarrays' function below.
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

function heightOfTree(root) {
    // Write your code here
    if(root == null) return -1;
    
    let x = heightOfTree(root.left);
    let y = heightOfTree(root.right);
    return Math.max(x, y) + 1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const n = parseInt(readLine().trim());
        const arr = readLine().trim().split(" ").map(e => parseInt(e));
        var tree = new Tree();
        console.log(tree)
        for(let j=0; j<n; j++) {
            tree.root = tree.insert(tree.root, arr[j]);
        }
        let ans = heightOfTree(tree.root)
        ws.write(ans + '\n');
    }
    ws.end();
}
