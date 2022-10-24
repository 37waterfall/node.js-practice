// https://www.tutorialkart.com/nodejs/node-js-callback-function/

var fs = require('fs')

var data = fs.readFileSync('sample.txt')

console.log('Reading file completed: ' + new Date().toISOString()) // 1


console.log('After readFileSync statement: ' + new Date().toISOString()) // 2