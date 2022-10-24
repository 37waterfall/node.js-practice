// https://www.tutorialkart.com/nodejs/node-js-convert-array-to-buffer/

// 01 ------------------------
// const arr = [0x74, 0x32, 0x91];

// const buf = Buffer.from(arr);

// for (const byt of buf.values()) {
//   console.log(byt);
// }

// 0x74 = 0111 0100 = 116
// 0x32 = 0011 0010 = 50
// 0x91 = 1001 0001 = 145

// 02 ------------------------

// const arr = [74, 32, 91];

// const buf = Buffer.from(arr);

// for (const byt of buf.values()) {
//   console.log(byt);
// }
// // 74
// // 32
// // 91

// 03 ------------------------

const arr = [true, true, false];

const buf = Buffer.from(arr);

for (const byt of buf.values()) {
  console.log(byt);
}

// 1
// 1
// 0
