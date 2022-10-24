// https://www.tutorialkart.com/nodejs/extend-or-add-functions-to-node-js-module/

var fs = require('fs');

fs.printMessage = function(str) {
    console.log('Message from newly added function to the module');
    console.log(str);
}

module.exports = fs;

fs.printMessage('Success');

