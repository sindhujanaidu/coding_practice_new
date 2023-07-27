// https://www.codechef.com/problems/MUFFINS3

// your code goes here

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.split('\n').map(string => {
        return string.trim();
    }); 
    main();    
});

function readLine(){
    return inputString[currentLine++];
}

function main(){
    // input in nodeJs
	const T = parseInt(readLine(), 10);
	for(let i = 0; i< T; i++) {
    	const numOfCupCakes = parseInt(readLine(), 10);
    	const pkg = parseInt(numOfCupCakes/2) + 1;
    	console.log( pkg);
	}
}
