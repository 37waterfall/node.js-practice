// Node.js Buffers – Node.js Buffer is a class that helps to handle and work with octet streams.
// Octet streams would generally come into picture when dealing with TCP data streams and file system operations.

// Raw memory allocated to buffers is outside the Node.js V8 heap memory.

// bufferLength is an integer specifying the length of buffer to be created.
// The buffer contains all memory locations filled with value.

// Buffer.alloc(bufferLength, value);

const buf1 = Buffer.allocUnsafe(11);

const len = buf1.write("welcomeuser");

for (const byt of buf1.values()) {
  console.log(byt);
}

// 119
// 101
// 108
// 99
// 111
// 109
// 101
// 117
// 115
// 101
// 114
