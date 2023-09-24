// https://www.hackerrank.com/contests/smart-interviews/challenges/si-window-maximum


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

/*
 * Complete the 'windowMaximum' function below.
 */    

// function windowMaximum(n, arr, k) {
//     // Write your code here
//     let map = {};
//     for(let i=0; i<k; i++) {
//         map[arr[i]] = (map[arr[i]] || 0) + 1;
//     }
//     console.log(map)
//     for(let i=k; i<n; i++) {
//         if(map[arr[i-k]] > 1) {
//             map[arr[i-k]]--;
//         } else {
//             delete map[arr[i-k]];
//         }
//         map[arr[i]] = (map[arr[i]] || 0) + 1;
//     }
//     console.log(map)
// }

/**
 * @class Dequeue
 */

class Dequeue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    pushFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount  > 0) {
            this.lowestCount --;
            this.items[this.lowestCount] = element;
        } else {
            for (let index = this.count; index > 0; index--) {
                this.items[index] =  this.items[index -1];
            }
            this.count ++;
            this.items[0] = element;
        }
    }
    pushBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    popFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;

    }
    popBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return result;
    }

    front(){
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    back(){
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count -1];
    }



    isEmpty() {
        return this.count - this.lowestCount == 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let string = `${this.items[this.lowestCount]}`;
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            string = `${string},${this.items[index]}`;
        }
        return string;
    }

}

function windowMaximum(n, arr, k) {
    // Write your code here
    let deq = new Dequeue;
    for(let i = 0; i < k; i++) {
        let x = arr[i];
        while(deq.size != 0 && x > deq.back()) {
            deq.popBack()
        }
        deq.pushBack(x);
    }
    let sum = deq.front();
    // console.log(deq.front())
    for(let i = k; i < n; i++) {
        let add = arr[i];
        let rem = arr[i-k];
        if(rem == deq.front()) {
            deq.popFront();
        }
        while(deq.size != 0 && add > deq.back()) {
            deq.popBack()
        }
        deq.pushBack(add);
        // console.log(deq.front());
        sum += deq.front();
    }
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const [n, k] = readLine().trim().split(" ").map(e => parseInt(e));
        const arr = readLine().trim().split(" ").map(e => parseInt(e));
        let ans = windowMaximum(n, arr, k);
        ws.write(ans + '\n');
    }
    ws.end();
}
