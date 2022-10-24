// https://www.tutorialkart.com/nodejs/node-js-convert-json-to-buffer/

const msg = '{"name":"John", "age":"22"}';

const jsonObj = JSON.parse(msg);

const jsonStr = JSON.stringify(jsonObj);

const buf = Buffer.from(jsonStr);

console.log(jsonStr); // {"name":"John","age":"22"}

console.log(buf.length, buf); //26 <Buffer 7b 22 6e 61 6d 65 22 3a 22 4a 6f 68 6e 22 2c 22 61 67 65 22 3a 22 32 32 22 7d>
