// https://www.tutorialkart.com/nodejs/node-js-buffer-length/

// const buf = Buffer.from("welcome to learn node.js");
// const str = "welcome to learn node.js";

// const len = buf.length;

// console.log(len); // 24
// console.log(str.length); // 24

const buf = Buffer.alloc(50);
// const bytesWritten = buf.write("welcome to learn node.js");
const bytesWritten = buf.write(
  "welcome to learn node.jswelcome to learn node.jswelcome to learn node.jswelcome to learn node.jswelcome to learn node.jswelcome to learn node.js"
);

const len = buf.length;
console.log(len); // 50
