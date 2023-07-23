// https://www.codechef.com/problems/HS08TEST

/* We have populated the solutions for the 10 easiest problems for your support.*/
/* Click on the SUBMIT button to make a submission to this problem.*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.split(' ').map(string => {
        return string.trim();
    }); 
    main();    
});

function readLine(){
    return inputString[currentLine++];
}

function main(){
    // input in nodeJs
	let withdrawal = parseFloat(readLine(), 10);
	let currentBal = parseFloat(readLine(), 10);
	if(withdrawal%5 === 0 && withdrawal + 0.5 <= currentBal){
	    console.log((currentBal - withdrawal - 0.5).toPrecision(10) );
	}
	else {
	    console.log((currentBal).toPrecision(10));
	}
}


